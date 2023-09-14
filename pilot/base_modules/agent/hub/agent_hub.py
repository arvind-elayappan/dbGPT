from ..db.plugin_hub_db import PluginHubEntity, PluginHubDao
from ..db.my_plugin_db import MyPluginDao, MyPluginEntity>

class AgentHub:
    def __init__(self) -> None:
        self.hub_dao = PluginHubDao()


    def query_plugins(self, ):
        pass

    def upload_plugin(self):
        pass

    def remove_plugin(self):

    def install_plugin(self):



class MyPlugins:
    def __init__(self) -> None:
        self.my_plugins_dao = MyPluginDao()


    def get_my_plugin(self, user: str):
        pass

    def uninstall_plugin(self):



