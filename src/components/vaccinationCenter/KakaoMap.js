/*global kakao*/
import { useEffect } from "react";

const KakaoMap = ({ data }) => {
  useEffect(() => {
    mapscript();
  }, [data]);

  const mapscript = () => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(36.44603411021132, 128.03618880207438),
      level: 12,
    };

    var map = new kakao.maps.Map(container, options);

    // 마커 이미지를 생성합니다

    for (let d of data) {
      var imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(d.lat, d.lng),
        title: d.centerName,
        image: markerImage,
      });
    }
  };
  return (
    <div>
      <div id="map" style={{ width: "550px", height: "550px" }} />
    </div>
  );
};

export default KakaoMap;
