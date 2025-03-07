use super::MANIFEST_NAME;
use crate::commands::docker::scaffold::DockerManifest;
use moon::{build_action_graph, generate_project_graph};
use moon_action_pipeline::Pipeline;
use moon_actions::install_proto;
use moon_terminal::safe_exit;
use moon_workspace::Workspace;
use starbase::system;
use starbase_utils::json;

#[system]
pub async fn setup(workspace: ResourceMut<Workspace>) {
    let manifest_path = workspace.root.join(MANIFEST_NAME);

    if !manifest_path.exists() {
        eprintln!("Unable to setup, docker manifest missing. Has it been scaffolded with `moon docker scaffold`?");
        safe_exit(1);
    }

    install_proto(workspace).await?;

    let manifest: DockerManifest = json::read_file(manifest_path)?;
    let project_graph = generate_project_graph(workspace).await?;
    let mut action_graph_builder = build_action_graph(&project_graph)?;

    for project_id in &manifest.focused_projects {
        let project = project_graph.get(project_id)?;

        action_graph_builder.install_deps(&project, None)?;
    }

    let action_graph = action_graph_builder.build()?;

    Pipeline::new(workspace.to_owned(), project_graph)
        .run(action_graph, None)
        .await?;
}
