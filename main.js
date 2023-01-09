import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/tis_af18/wms',
        params: {'LAYERS': 'tis_af18:boundary', 'TILED': true, 'STYLES':'	SLD_boundary'},
        serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        transition: 0,
      }),
    }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/tis_af18/wms',
        params: {'LAYERS': 'tis_af18:floor', 'TILED': true, 'STYLES':'	floor'},
        serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        transition: 0,
      }),
    }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/tis_af18/wms',
        params: {'LAYERS': 'tis_af18:wood', 'TILED': true, 'STYLES':'	SLD_wood_green'},
        serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        transition: 0,
      }),
    }),
    new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/tis_af18/wms',
      params: {'LAYERS': 'tis_af18:waterway', 'TILED': true, 'STYLES':'	SLD_waterway_blue'},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/tis_af18/wms',
      params: {'LAYERS': 'tis_af18:highway', 'TILED': true, 'STYLES':'	SLD_highway_2'},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/tis_af18/wms',
      params: {'LAYERS': 'tis_af18:kindergarten', 'TILED': true, 'STYLES':'	SLD_kindergarten_pink'},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/tis_af18/wms',
      params: {'LAYERS': 'tis_af18:school', 'TILED': true, 'STYLES':'	SLD_school_purple'},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/tis_af18/wms',
      params: {'LAYERS': 'tis_af18:university', 'TILED': true, 'STYLES':'	SLD_university_purple'},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/tis_af18/wms',
      params: {'LAYERS': 'tis_af18:building', 'TILED': true, 'STYLES':'	SLD_building_black'},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/tis_af18/wms',
      params: {'LAYERS': 'tis_af18:water', 'TILED': true, 'STYLES':'	SLD_water_blue'},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    }),
  }),
  ],
 
  view: new View({
    center: fromLonLat([90.495237, 56.269501]),
    zoom: 12
  })
});
