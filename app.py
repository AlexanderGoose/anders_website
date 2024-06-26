from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    title = 'testing'
    return render_template('home.html', title=title)

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')