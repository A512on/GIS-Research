var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMapSatellite_1 = new ol.layer.Tile({
            'title': 'Google Map Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_SanMiguelSan_Miguel_2 = new ol.format.GeoJSON();
var features_SanMiguelSan_Miguel_2 = format_SanMiguelSan_Miguel_2.readFeatures(json_SanMiguelSan_Miguel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanMiguelSan_Miguel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanMiguelSan_Miguel_2.addFeatures(features_SanMiguelSan_Miguel_2);
var lyr_SanMiguelSan_Miguel_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SanMiguelSan_Miguel_2, 
                style: style_SanMiguelSan_Miguel_2,
                interactive: true,
                title: '<img src="styles/legend/SanMiguelSan_Miguel_2.png" /> San Miguel San_Miguel'
            });
var format_kkk_3 = new ol.format.GeoJSON();
var features_kkk_3 = format_kkk_3.readFeatures(json_kkk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kkk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kkk_3.addFeatures(features_kkk_3);
var lyr_kkk_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kkk_3, 
                style: style_kkk_3,
                interactive: true,
                title: '<img src="styles/legend/kkk_3.png" /> kkk'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMapSatellite_1.setVisible(true);lyr_SanMiguelSan_Miguel_2.setVisible(true);lyr_kkk_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMapSatellite_1,lyr_SanMiguelSan_Miguel_2,lyr_kkk_3];
lyr_SanMiguelSan_Miguel_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_kkk_3.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'ID': 'ID', });
lyr_SanMiguelSan_Miguel_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'PROVINCE': 'TextEdit', 'REGION': 'TextEdit', });
lyr_kkk_3.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'ID': 'Range', });
lyr_SanMiguelSan_Miguel_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'NAME_3': 'inline label', 'NL_NAME_3': 'no label', 'VARNAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'PROVINCE': 'no label', 'REGION': 'no label', });
lyr_kkk_3.set('fieldLabels', {'photo': 'inline label', 'filename': 'inline label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'inline label', 'latitude': 'inline label', 'ID': 'no label', });
lyr_kkk_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});