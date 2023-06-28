import traceback
import os
import shutil
import argparse
import sys

ROOT_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(ROOT_PATH)

from pilot.configs.config import Config
from pilot.configs.model_config import (
    DATASETS_DIR,
    KNOWLEDGE_UPLOAD_ROOT_PATH,
    LLM_MODEL_CONFIG,
    LOGDIR,
)
from pilot.utils import build_logger

from pilot.server.webserver_base import server_init

from fastapi import FastAPI, applications
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware

from pilot.openapi.api_v1.api_v1 import router as api_v1, validation_exception_handler


CFG = Config()
logger = build_logger("webserver", LOGDIR + "webserver.log")


def swagger_monkey_patch(*args, **kwargs):
    return get_swagger_ui_html(
        *args, **kwargs,
        swagger_js_url='https://cdn.bootcdn.net/ajax/libs/swagger-ui/4.10.3/swagger-ui-bundle.js',
        swagger_css_url='https://cdn.bootcdn.net/ajax/libs/swagger-ui/4.10.3/swagger-ui.css'
    )


applications.get_swagger_ui_html = swagger_monkey_patch

app = FastAPI()
origins = ["*"]

# 添加跨域中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# app.mount("static", StaticFiles(directory="static"), name="static")
app.include_router(api_v1)
app.add_exception_handler(RequestValidationError, validation_exception_handler)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--model_list_mode", type=str, default="once", choices=["once", "reload"])

    # old version server config
    parser.add_argument("--host", type=str, default="0.0.0.0")
    parser.add_argument("--port", type=int, default=CFG.WEB_SERVER_PORT)
    parser.add_argument("--concurrency-count", type=int, default=10)
    parser.add_argument("--share", default=False, action="store_true")

    # init server config
    args = parser.parse_args()
    server_init(args)
    CFG.NEW_SERVER_MODE = True
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)