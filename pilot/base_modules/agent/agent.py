from abc import ABC, abstractmethod


class Agent:



class AgentFacade(ABC):
    def __init__(self) -> None:
        self.model = None
        self.tokenizer = None
        self._model_params = None
        self.llm_adapter: BaseLLMAdaper = None
        self.llm_chat_adapter: BaseChatAdpter = None


class AgentMange:
