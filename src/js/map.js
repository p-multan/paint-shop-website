export class Map {
  constructor() {
    this.render();
  }

  render() {
    const coords = { lat: 50.1615, lng: 21.0075 };

    if (!google) {
      alert(
        'Nie można otworzyć biblioteki Google Maps - prosimy spróbować ponownie później'
      );
      return;
    }

    const map = new google.maps.Map(document.getElementById('contactMap'), {
      zoom: 16,
      center: coords
    });

    new google.maps.Marker({
      position: coords,
      map: map
    });
  }
}
