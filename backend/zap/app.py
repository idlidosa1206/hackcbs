from flask import Flask, render_template, jsonify, request, redirect
from utils_zap import spider_scan
from utils_zap import limit_pscan, limit_ascan
from zapv2 import ZAPv2
from mail import mail

app = Flask(__name__,static_url_path='/static')
zap = ZAPv2(apikey="")
baseurl = "localhost"

limit_pscan()
limit_ascan()

@app.route('/')
def index():
    return jsonify({'message':'hello'})

@app.route('/spider')
def spider():
    if(request.form['target']):
        target = request.form['target']
        email = request.form['email']
        try:
            return jsonify({'result': spider_scan(target)})
        except:
            return jsonify({'message':'No target found'})
    return jsonify({'message':'No target found'})

@app.route('/passive')
def passive():
    if(request.form['target']):
        target = request.form['target']
        email = request.form['email']
        try:
            alerts = list(passive_scan(target))
            url = {'url': baseurl+"/static/"+email+report(target)+".pdf"}
            mail(email, url[url])
            alerts.append(url)
            return jsonify(alerts)
        except:
            return jsonify({'message':'No target found'})
    return jsonify({'message':'No target found'})

@app.route('/active')
def active():
    if(request.form['target']):
        target = request.form['target']
        email = request.form['email']
        try:
            alerts = list(active_scan(target))
            url = {'url': baseurl+"/static/"+email+"/"+report(target)+".pdf"}
            mail(email, url[url])
            alerts.append(url)
            return jsonify(alerts)
        except:
            return jsonify({'message':'No target found'})
    return jsonify({'message':'No target found'})
    

if __name__ == '__main__':
    app.run()