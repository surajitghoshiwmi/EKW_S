var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ekw_1 = new ol.format.GeoJSON();
var features_ekw_1 = format_ekw_1.readFeatures(json_ekw_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ekw_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ekw_1.addFeatures(features_ekw_1);
var lyr_ekw_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ekw_1, 
                style: style_ekw_1,
                popuplayertitle: 'ekw',
                interactive: true,
                title: '<img src="styles/legend/ekw_1.png" /> ekw'
            });
var format_EKW_Survey_Points_2 = new ol.format.GeoJSON();
var features_EKW_Survey_Points_2 = format_EKW_Survey_Points_2.readFeatures(json_EKW_Survey_Points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EKW_Survey_Points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EKW_Survey_Points_2.addFeatures(features_EKW_Survey_Points_2);
var lyr_EKW_Survey_Points_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EKW_Survey_Points_2, 
                style: style_EKW_Survey_Points_2,
                popuplayertitle: 'EKW_Survey_Points',
                interactive: true,
                title: '<img src="styles/legend/EKW_Survey_Points_2.png" /> EKW_Survey_Points'
            });
var format_EKW_Bheri_coordinates_3 = new ol.format.GeoJSON();
var features_EKW_Bheri_coordinates_3 = format_EKW_Bheri_coordinates_3.readFeatures(json_EKW_Bheri_coordinates_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EKW_Bheri_coordinates_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EKW_Bheri_coordinates_3.addFeatures(features_EKW_Bheri_coordinates_3);
var lyr_EKW_Bheri_coordinates_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EKW_Bheri_coordinates_3, 
                style: style_EKW_Bheri_coordinates_3,
                popuplayertitle: 'EKW_Bheri_coordinates',
                interactive: true,
                title: '<img src="styles/legend/EKW_Bheri_coordinates_3.png" /> EKW_Bheri_coordinates'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ekw_1.setVisible(true);lyr_EKW_Survey_Points_2.setVisible(true);lyr_EKW_Bheri_coordinates_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ekw_1,lyr_EKW_Survey_Points_2,lyr_EKW_Bheri_coordinates_3];
lyr_ekw_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Name_1': 'Name_1', });
lyr_EKW_Survey_Points_2.set('fieldAliases', {'SlNo': 'SlNo', 'Lat': 'Lat', 'Lon': 'Lon', 'Collected': 'Collected', 'Date': 'Date', 'Remarks': 'Remarks', 'Decision': 'Decision', 'District': 'District', 'Block': 'Block', 'Mouza': 'Mouza', 'Landcover': 'Landcover', 'Picture': 'Picture', });
lyr_EKW_Bheri_coordinates_3.set('fieldAliases', {'Id': 'Id', 'Name_Bheri': 'Name_Bheri', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ekw_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name_1': 'TextEdit', });
lyr_EKW_Survey_Points_2.set('fieldImages', {'SlNo': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Collected': 'TextEdit', 'Date': 'TextEdit', 'Remarks': 'CheckBox', 'Decision': 'TextEdit', 'District': 'TextEdit', 'Block': 'TextEdit', 'Mouza': 'TextEdit', 'Landcover': 'TextEdit', 'Picture': 'ExternalResource', });
lyr_EKW_Bheri_coordinates_3.set('fieldImages', {'Id': 'Range', 'Name_Bheri': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ekw_1.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Clamped': 'hidden field', 'Extruded': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Name_1': 'hidden field', });
lyr_EKW_Survey_Points_2.set('fieldLabels', {'SlNo': 'hidden field', 'Lat': 'inline label - visible with data', 'Lon': 'inline label - visible with data', 'Collected': 'hidden field', 'Date': 'hidden field', 'Remarks': 'hidden field', 'Decision': 'hidden field', 'District': 'hidden field', 'Block': 'hidden field', 'Mouza': 'hidden field', 'Landcover': 'hidden field', 'Picture': 'inline label - visible with data', });
lyr_EKW_Bheri_coordinates_3.set('fieldLabels', {'Id': 'hidden field', 'Name_Bheri': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_EKW_Bheri_coordinates_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});