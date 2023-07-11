from TDDpreclass import create_app
import pytest

weather_data = {
    'San Francisco': {'temperature': 14, 'weather': 'Cloudy'},
    'New York': {'temperature': 20, 'weather': 'Sunny'},
    'Los Angeles': {'temperature': 24, 'weather': 'Sunny'},
    'Seattle': {'temperature': 10, 'weather': 'Rainy'},
    'Austin': {'temperature': 32, 'weather': 'Hot'},
}


@pytest.fixture
def app():
    return create_app()


@pytest.fixture
def client(app):
    return app.test_client()

# def test_red(client):
#     response = client.get("/weather/Mumbai")
#     assert response.status_code == 200
#     assert response.get_json() == weather_data["Austin"]


def test_read(client):
    response = client.get("/weather/Austin")
    assert response.status_code == 200
    assert response.get_json() == weather_data["Austin"]


def test_create(client):
    city = "Mumbai"
    weather_info = {'temperature': 34, 'weather': 'Cloudy'}
    response = client.post(
        "/weather", json={"city": city, "weather_info": weather_info})
    assert response.status_code == 201
    assert response.get_json() == {city: weather_info}


def test_update(client):
    response = client.put(
        '/weather/Austin', json={"weather_info": {'temperature': 12, 'weather': 'Rainy'}})
    assert response.status_code == 200
    assert response.get_json() == {"Austin": {
        'temperature': 12, 'weather': 'Rainy'}}
    
def test_delete(client):
    response=client.delete('/weather/Austin')
    assert response.status_code == 200
    assert response.get_json()=="Austin"
