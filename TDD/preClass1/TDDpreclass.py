from flask import Flask, request, jsonify
import pytest

weather_data = {
    'San Francisco': {'temperature': 14, 'weather': 'Cloudy'},
    'New York': {'temperature': 20, 'weather': 'Sunny'},
    'Los Angeles': {'temperature': 24, 'weather': 'Sunny'},
    'Seattle': {'temperature': 10, 'weather': 'Rainy'},
    'Austin': {'temperature': 32, 'weather': 'Hot'},
}

# print(weather_data["Austin"])


def create_app():
    app = Flask(__name__)

# list to store food items

    @app.route('/weather/<string:city>', methods=['GET'])
    def weather(city):
        if city in weather_data:
            return jsonify(weather_data[city])
        return jsonify({"message": "NO data found"})

    @app.route("/weather", methods=["POST"])
    def post():
        city = city = request.json.get('city')
        weather_info = request.json.get('weather_info')
        weather_data[city] = weather_info
        return jsonify({city: weather_info}), 201

    @app.route('/weather/<string:city>', methods=['PUT'])
    def update(city):
        weather_info = request.json.get('weather_info')
        weather_data[city] = weather_info
        return jsonify({city: weather_info})

    @app.route('/weather/<string:city>', methods=['DELETE'])
    def delete(city):
        del weather_data[city]
        return jsonify(city)

    return app
