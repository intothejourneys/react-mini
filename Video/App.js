function App() {
    let atate = { currentVideo: "CurrentVd" }
    // 현재 비디오
    let handleVideoChange = (newVideo) => (
        state.currentVideo = newVideo
        console.log("This is new video!", state.currentVideo),
        console.log("state has been changed, rendering will be start")
        render();
    ) // 새 비디오를 받아 현재 비디오로 변경, 렌더링 실행!

    ler render = () => {
        let player = VideoPlayer(state.currentVideo)
        let List = VideoListEntry(["Video-1", "Video-2", "Video-3"], handlerVideoChange)
        return List;
    }
    return render()
} // 렌더링을 통해 Video player에 현재 비디오 가 전달되고, 
  // 새 비디오 리스트에 handleVideoChange가 관심을 갖는다

function VideoListEntry(videos, callback) {
    console.log("available video list", videos.join())
    return { changeVideo: callback }
} // 새 비디오 리스트 표시

function VideoPlayer(video) {
    console.log(video + "is playing")
} // 현재 비디오 표시