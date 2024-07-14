from flask import Flask, render_template
import os

app = Flask(__name__)
@app.route('/')
def index():
    top_wear = os.listdir('static/images/top_wear')
    bottom_wear = os.listdir('static/images/bottom_wear')
    footwear = os.listdir('static/images/footwear')

    top_wear = [os.path.join('static/images/top_wear', image) for image in top_wear]
    bottom_wear = [os.path.join('static/images/bottom_wear', image) for image in bottom_wear]
    footwear = [os.path.join('static/images/footwear', image) for image in footwear]

    return render_template('index.html', top_wear=top_wear, bottom_wear=bottom_wear, footwear=footwear)

if __name__ == '__main__':
    app.run(debug=True)