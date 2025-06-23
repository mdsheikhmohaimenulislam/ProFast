import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Component to fly to a location
const FlyTo = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], 11, { duration: 1.5 });
    }
  }, [lat, lng]);
  return null;
};

const Coverage = () => {
  const [search, setSearch] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selected, setSelected] = useState(null);

  // Load districts
  useEffect(() => {
    fetch("/warehouses.json")
      .then((res) => res.json())
      .then(setDistricts)
      .catch(console.error);
  }, []);

  // Filter districts based on search
  const matches = districts.filter(d =>
    d.district.toLowerCase().includes(search.toLowerCase())
  );

  // Update selected district
  useEffect(() => {
    if (matches.length > 0) setSelected(matches[0]);
  }, [search]);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center">We are available in 64 districts</h2>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered w-full max-w-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="h-[400px] w-full mt-8">
        <MapContainer center={[23.685, 90.3563]} zoom={7} className="h-full w-full rounded-xl z-0">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {selected && <FlyTo lat={selected.latitude} lng={selected.longitude} />}

          {matches.map((d, i) => (
            <Marker key={i} position={[d.latitude, d.longitude]}>
              <Popup>
                <strong>{d.district}</strong><br />
                {d.covered_area?.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
