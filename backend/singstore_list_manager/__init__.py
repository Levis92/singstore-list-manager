from flask import Flask, jsonify
import os, json

app = Flask(__name__)

@app.route('/')
def hello_world():
    rel_path = "/singstore_list_manager/singstore/songs.json"
    path = "".join([os.getcwd(), rel_path])
    with open(path) as f:
        return jsonify(json.loads(f.read()))
    
    return "Hello, world"