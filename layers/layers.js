var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KabupatenGunungKidul_1 = new ol.format.GeoJSON();
var features_KabupatenGunungKidul_1 = format_KabupatenGunungKidul_1.readFeatures(json_KabupatenGunungKidul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenGunungKidul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenGunungKidul_1.addFeatures(features_KabupatenGunungKidul_1);
var lyr_KabupatenGunungKidul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenGunungKidul_1, 
                style: style_KabupatenGunungKidul_1,
                popuplayertitle: 'Kabupaten Gunung Kidul',
                interactive: true,
    title: 'Kabupaten Gunung Kidul<br />\
    <img src="styles/legend/KabupatenGunungKidul_1_0.png" /> 94,06 - 96,13 % (Sangat Rendah)<br />\
    <img src="styles/legend/KabupatenGunungKidul_1_1.png" /> 96,13 - 97,14 % (Rendah)<br />\
    <img src="styles/legend/KabupatenGunungKidul_1_2.png" /> 97,14 - 97,84 % (Sedang)<br />\
    <img src="styles/legend/KabupatenGunungKidul_1_3.png" /> 97,84 - 98,62 % (Tinggi)<br />\
    <img src="styles/legend/KabupatenGunungKidul_1_4.png" /> 98,62 - 100,36 % (Sangat Tinggi)<br />' });
var format_GunungKidulPolyToLine_2 = new ol.format.GeoJSON();
var features_GunungKidulPolyToLine_2 = format_GunungKidulPolyToLine_2.readFeatures(json_GunungKidulPolyToLine_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GunungKidulPolyToLine_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GunungKidulPolyToLine_2.addFeatures(features_GunungKidulPolyToLine_2);
var lyr_GunungKidulPolyToLine_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GunungKidulPolyToLine_2, 
                style: style_GunungKidulPolyToLine_2,
                popuplayertitle: 'GunungKidulPolyToLine',
                interactive: false,
                title: '<img src="styles/legend/GunungKidulPolyToLine_2.png" /> GunungKidulPolyToLine'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KabupatenGunungKidul_1.setVisible(true);lyr_GunungKidulPolyToLine_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KabupatenGunungKidul_1,lyr_GunungKidulPolyToLine_2];
lyr_KabupatenGunungKidul_1.set('fieldAliases', {'WADMKC': 'Nama Kecamatan', 'JnRasio Je': 'Rasio Jenis Kelamin', });
lyr_GunungKidulPolyToLine_2.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', 'JnRasio Je': 'JnRasio Je', });
lyr_KabupatenGunungKidul_1.set('fieldImages', {'WADMKC': 'TextEdit', 'JnRasio Je': 'TextEdit', });
lyr_GunungKidulPolyToLine_2.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'JnRasio Je': 'TextEdit', });
lyr_KabupatenGunungKidul_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'JnRasio Je': 'inline label - always visible', });
lyr_GunungKidulPolyToLine_2.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'JnRasio Je': 'no label', });
lyr_GunungKidulPolyToLine_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});