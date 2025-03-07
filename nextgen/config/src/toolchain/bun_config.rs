use super::node_config::NodeVersionFormat;
use proto_core::{PluginLocator, UnresolvedVersionSpec};
use schematic::Config;

/// Docs: https://moonrepo.dev/docs/config/toolchain#bun
#[derive(Clone, Config, Debug)]
pub struct BunConfig {
    pub dependency_version_format: NodeVersionFormat,

    #[setting(default = ".", skip)]
    pub packages_root: String,

    pub plugin: Option<PluginLocator>,

    pub root_package_only: bool,

    #[setting(default = true)]
    pub sync_project_workspace_dependencies: bool,

    #[setting(env = "MOON_BUN_VERSION")]
    pub version: Option<UnresolvedVersionSpec>,
}
