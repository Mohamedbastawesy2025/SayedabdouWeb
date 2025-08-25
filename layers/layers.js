ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32635").setExtent([664431.553183, 3424179.624358, 674346.061566, 3430049.407928]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriSatellite_2 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_3IM_11102021_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "3IM_11-10-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/3IM_11102021_3.png",
    attributions: ' ',
                                projection: 'EPSG:32635',
                                alwaysInRange: true,
                                imageExtent: [665019.000000, 3423534.000000, 672429.000000, 3429882.000000]
                            })
                        });
var lyr_3IM_17082021_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "3IM_17-08-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/3IM_17082021_4.png",
    attributions: ' ',
                                projection: 'EPSG:32635',
                                alwaysInRange: true,
                                imageExtent: [665037.000000, 3423534.000000, 672429.000000, 3429882.000000]
                            })
                        });
var lyr_3IM_21072018_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "3IM_21-07-2018",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/3IM_21072018_5.png",
    attributions: ' ',
                                projection: 'EPSG:32635',
                                alwaysInRange: true,
                                imageExtent: [665019.000000, 3423534.000000, 672429.000000, 3429882.000000]
                            })
                        });
var lyr_ch082021102021_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch08-2021-10-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch082021102021_6.png",
    attributions: ' ',
                                projection: 'EPSG:32635',
                                alwaysInRange: true,
                                imageExtent: [664971.000000, 3424929.000000, 672675.000000, 3430272.000000]
                            })
                        });
var lyr_ch20182019_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch2018-2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch20182019_7.png",
    attributions: ' ',
                                projection: 'EPSG:32635',
                                alwaysInRange: true,
                                imageExtent: [664971.000000, 3424929.000000, 672675.000000, 3430272.000000]
                            })
                        });
var lyr_ch20182020_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "ch2018-2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ch20182020_8.png",
    attributions: ' ',
                                projection: 'EPSG:32635',
                                alwaysInRange: true,
                                imageExtent: [664971.000000, 3424929.000000, 672675.000000, 3430272.000000]
                            })
                        });
var format_CoastLine_11102021_9 = new ol.format.GeoJSON();
var features_CoastLine_11102021_9 = format_CoastLine_11102021_9.readFeatures(json_CoastLine_11102021_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_CoastLine_11102021_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastLine_11102021_9.addFeatures(features_CoastLine_11102021_9);
var lyr_CoastLine_11102021_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoastLine_11102021_9, 
                style: style_CoastLine_11102021_9,
                interactive: true,
                title: '<img src="styles/legend/CoastLine_11102021_9.png" /> CoastLine_11-10-2021'
            });
var format_CoastLine_17082021_10 = new ol.format.GeoJSON();
var features_CoastLine_17082021_10 = format_CoastLine_17082021_10.readFeatures(json_CoastLine_17082021_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_CoastLine_17082021_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastLine_17082021_10.addFeatures(features_CoastLine_17082021_10);
var lyr_CoastLine_17082021_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoastLine_17082021_10, 
                style: style_CoastLine_17082021_10,
                interactive: true,
                title: '<img src="styles/legend/CoastLine_17082021_10.png" /> CoastLine_17-08-2021'
            });
var format_CoastLine_21072018_11 = new ol.format.GeoJSON();
var features_CoastLine_21072018_11 = format_CoastLine_21072018_11.readFeatures(json_CoastLine_21072018_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_CoastLine_21072018_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastLine_21072018_11.addFeatures(features_CoastLine_21072018_11);
var lyr_CoastLine_21072018_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoastLine_21072018_11, 
                style: style_CoastLine_21072018_11,
                interactive: true,
                title: '<img src="styles/legend/CoastLine_21072018_11.png" /> CoastLine_21-07-2018'
            });
var group_ShoreLine = new ol.layer.Group({
                                layers: [lyr_CoastLine_11102021_9,lyr_CoastLine_17082021_10,lyr_CoastLine_21072018_11,],
                                title: "ShoreLine"});
var group_Changes = new ol.layer.Group({
                                layers: [lyr_ch082021102021_6,lyr_ch20182019_7,lyr_ch20182020_8,],
                                title: "Changes"});
var group_RasterData = new ol.layer.Group({
                                layers: [lyr_3IM_11102021_3,lyr_3IM_17082021_4,lyr_3IM_21072018_5,],
                                title: "RasterData"});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_EsriSatellite_2,],
                                title: "BaseMap"});

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_EsriSatellite_2.setVisible(true);lyr_3IM_11102021_3.setVisible(true);lyr_3IM_17082021_4.setVisible(true);lyr_3IM_21072018_5.setVisible(true);lyr_ch082021102021_6.setVisible(true);lyr_ch20182019_7.setVisible(true);lyr_ch20182020_8.setVisible(true);lyr_CoastLine_11102021_9.setVisible(true);lyr_CoastLine_17082021_10.setVisible(true);lyr_CoastLine_21072018_11.setVisible(true);
var layersList = [group_BaseMap,group_RasterData,group_Changes,group_ShoreLine];
lyr_CoastLine_11102021_9.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Length': 'Length', });
lyr_CoastLine_17082021_10.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Length': 'Length', });
lyr_CoastLine_21072018_11.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Shape_Leng': 'Shape_Leng', });
lyr_CoastLine_11102021_9.set('fieldImages', {'LEFT_FID': '', 'RIGHT_FID': '', 'Length': '', });
lyr_CoastLine_17082021_10.set('fieldImages', {'LEFT_FID': '', 'RIGHT_FID': '', 'Length': '', });
lyr_CoastLine_21072018_11.set('fieldImages', {'LEFT_FID': '', 'RIGHT_FID': '', 'Shape_Leng': '', });
lyr_CoastLine_11102021_9.set('fieldLabels', {});
lyr_CoastLine_17082021_10.set('fieldLabels', {});
lyr_CoastLine_21072018_11.set('fieldLabels', {});
lyr_CoastLine_21072018_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});