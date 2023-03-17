### server.py

import os
from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def client(path):

	return send_from_directory("public/", "index.html")

##############################
#
# static js, css
#
##############################

@app.route("/static/<string:file>")
def send_static(file):

	return send_from_directory("public/", file)

##############################
#
# assets
#
##############################

@app.route("/assets", defaults={"path": ""})
@app.route("/assets/<path:path>/<string:file>")
def send_asset(path, file):

	return send_from_directory("public/assets/" + path, file)

if __name__ == "__main__":

	server_port = int(os.environ.get("PORT", 5000)) 
	app.run(debug=False, host="0.0.0.0", port=server_port)
