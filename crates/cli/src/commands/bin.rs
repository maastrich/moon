use clap::Args;
use miette::IntoDiagnostic;
use moon_terminal::safe_exit;
use moon_tool::{get_proto_env_vars, get_proto_paths, prepend_path_env_var};
use proto_core::ProtoEnvironment;
use starbase::system;
use tokio::process::Command;

#[derive(Args, Clone, Debug)]
pub struct BinArgs {
    #[arg(help = "The tool to query")]
    tool: String,
}

#[system]
pub async fn bin(args: ArgsRef<BinArgs>) {
    let proto = ProtoEnvironment::new()?;

    let result = Command::new("proto")
        .arg("bin")
        .arg(&args.tool)
        .env("PATH", prepend_path_env_var(get_proto_paths(&proto)))
        .envs(get_proto_env_vars())
        .spawn()
        .into_diagnostic()?
        .wait()
        .await
        .into_diagnostic()?;

    if !result.success() {
        safe_exit(result.code().unwrap_or(1));
    }
}
