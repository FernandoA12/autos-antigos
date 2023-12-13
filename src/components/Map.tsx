import { MapContainer, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { icon } from 'leaflet'

export function Map() {
  const data = {
    type: 'FeatureCollection' as
      | 'FeatureCollection'
      | 'Feature'
      | 'Point'
      | 'Polygon'
      | 'MultiPoint'
      | 'LineString'
      | 'MultiLineString'
      | 'MultiPolygon'
      | 'GeometryCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-93.33494635314818, 27.38363391804611],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [5.774822711963852, -39.35533580945779],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [109.54605135692431, -41.78234147810286],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [105.78521886236356, -72.84586587630542],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [31.801354657639756, 49.8830426515354],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-29.505748326726675, -63.37622910103682],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [16.9495448900335, -54.23086297189706],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [41.53575059443109, 43.34799686876602],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-12.530793826885418, 17.39179345244461],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-13.12202749660087, -58.33863053848759],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [164.47437364860482, 7.804076469193784],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [133.34263643630456, -88.16716415971537],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-65.28455740452065, 40.257316199765036],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [155.0991450879276, -63.16695695545398],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [4.181726564173758, -89.54240135707282],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [26.66746895664156, -6.225623925039527],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-92.42111816577224, -45.70995997062576],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [78.37477890843257, 45.749200685395174],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [99.13820846900413, -67.50596317318693],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-85.98335522917534, -50.77721176315353],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [35.69479137645671, -48.196021869541454],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [65.87106441708418, -37.86410365540235],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [96.59948412826219, 80.76726763115434],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-139.7441124675905, 9.45968742825042],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-153.20543956640503, -42.339466109656705],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-154.070366167159, -10.400659693508967],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [89.80013731088967, 68.54698818364749],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [4.789904575828441, -26.993467588580632],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-20.319185126795833, 66.51790301259462],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.340257406083644, -20.587903907813537],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-118.82628636021462, -86.76127975111471],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [83.16258054178037, -82.701393620631],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [143.2678698327875, 64.01909791811431],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [84.79288860569184, -58.91123854364964],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [72.12185972861644, 40.193463201495845],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [15.714762428456357, 59.51222922519045],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-26.252509174403798, -19.943192777968942],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [45.6821257408311, 9.345646511812475],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [144.14596760567363, 7.219731640314464],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [85.98294438620474, 76.71490831609766],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [109.2282893173647, -21.149341349857682],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [67.8922080252424, -19.384395146359964],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-84.86094795125099, 57.97577533558852],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [158.44934667413258, -34.70923468190284],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [125.41320145398736, -19.72816325340826],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-53.81275656602553, -62.12141739833383],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [37.855491874252806, -30.301775420299517],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [148.42607206687296, 82.73351563882919],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [74.6123883581011, -43.390073530487506],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [48.94153121524611, -43.71432859501205],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-158.88612603909937, -14.058741987206647],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-12.703367366704184, 9.304595796636068],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [2.535158582768897, 82.24584036066061],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.65669433724094, 61.985622923900465],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [100.30849456407967, 60.4920699177504],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [97.99216025524012, -50.02797954257349],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-125.44357430885478, 70.51529598614673],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [22.199090563602404, -38.38532632053286],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-73.18089500100527, -1.4915979336088414],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [15.844763067731202, 21.98135548410379],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-164.34559299875298, -55.43371484001511],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [88.71517982499567, 76.47882099082483],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [176.52972283238773, 78.25711710438507],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [67.28502582737363, -63.41481551337304],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-119.09061112386512, -26.957673868971685],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-153.03507118451358, 44.26897905712945],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-22.593780384222654, -5.537309784750035],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [51.141215880963045, -86.9203124079954],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-50.15679419560948, -57.15827187020922],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [62.268914355065675, -32.09147362099179],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [148.1398379438085, -19.612808601281518],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [35.45520171739205, -73.28762946442077],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [136.28889498957594, -86.75139530359712],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [38.693010801675804, -79.2708299742827],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-174.43042127726326, 8.40440214984001],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-7.497999517351879, 64.51275228873048],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [58.481642322812526, 58.01497138543709],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [173.06610346191894, 50.79238875936468],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-113.7151003526719, 86.85879231688861],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-140.98399505551203, 73.55878902625433],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-58.99938675728758, 39.2207844913822],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-55.31029454156002, 67.58686195171373],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [150.12544106931128, 39.857361968590624],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.8369274933538406, -41.91433279758318],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-28.607397860326486, -73.43038086573907],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-110.96142906407954, 85.00729041079023],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [77.54457216135559, 62.62901378158753],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [31.95931309704215, -72.42927057649105],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-45.97817731307072, 36.82282346651847],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-104.76082408455025, 9.120477348279739],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [162.60041537912653, 20.9470843444779],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-103.20537983153416, -70.06364003350008],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-154.23700814654381, -21.86756873133124],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-19.048533313795375, -27.22199042612035],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-20.77148358864835, -87.82925242073776],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-4.343931582557969, -13.279035892824457],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-30.6625635553782, -25.45469220730796],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [124.36540227379423, 29.45778248028138],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [173.05310188641894, 89.29759768063317],
        },
        properties: {},
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-69.26410853398696, -78.75708654170037],
        },
        properties: {},
      },
      {
        type: 'Feature',
        properties: {
          name: 'Área 1',
          description: 'Carros da Ford',
        },
        geometry: {
          coordinates: [
            [
              [-46.628065729394734, -22.470425324259764],
              [-46.628257336288016, -22.470393910471856],
              [-46.62860655530315, -22.471447696378917],
              [-46.6282326128179, -22.47146197526571],
              [-46.628065729394734, -22.470425324259764],
            ],
          ],
          type: 'Polygon',
        },
      },
    ],
  }

  return (
    <MapContainer
      className="w-full flex-1"
      center={{ lat: -22.4703848, lng: -46.6286518 }}
      zoom={18}
      scrollWheelZoom={false}
      minZoom={18}
      maxZoom={18}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        icon={icon({
          iconUrl: '/marker-icon.png',
          iconSize: [38, 38],
        })}
        position={{ lng: -46.62990453748549, lat: -22.470628085810418 }}
      >
        <Popup>
          <span>Food Truck - Lanchonete</span>
        </Popup>
      </Marker>
      <GeoJSON
        eventHandlers={{
          click: (props) => console.log(props.layer.feature.properties),
        }}
        onEachFeature={(feature, layer) => {
          if (
            feature.properties &&
            feature.properties.name &&
            feature.properties.description
          ) {
            layer.bindPopup(
              `<strong>${feature.properties.name}</strong><br />${feature.properties.description}`
            )
          }
        }}
        data={data}
      />
    </MapContainer>
  )
}
