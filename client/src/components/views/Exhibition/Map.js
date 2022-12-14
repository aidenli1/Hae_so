/*global kakao*/ 
import React, { useEffect } from 'react';

const { kakao } = window;
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=507591fa3cf32221637f42f72cb06fce"></script>


const Map=() => {
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 3
        };
    
        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
        var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(map);
    
        }, [])
    
    
        return (
            <div>
            <div id="map" style={{width:"500px", height:"400px"}}></div>
           
            </div>
        )
}

export default Map