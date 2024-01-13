import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const Ydt_watch_metadata = styled.div``;
const Ydt_watch_flexy = styled.div``;
const Ytd_comments = styled.div``;
const Ytd_player = styled.div``;

const App: React.FC<{}> = () => {
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { color: "blue" });
      }
    });

    console.log("123");

    return () => {};
  }, []);

  return (
    <>
      <Ydt_watch_flexy className="style-scope ytd-page-manager hide-skeleton">
        <div id="full-bleed-container">
          <div id="player-full-bleed-container">
            <div id="player-container">
              <Ytd_player id="ytd-player">
                <div id="container">
                  <div className="html5-video-player ytp-transparent ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-exp-ppp-update ytp-fit-cover-video ytp-bigboards ytp-fine-scrubbing-exp ytp-hide-info-bar ytp-autonav-endscreen-cancelled-state paused-mode">
                    <div className="html5-video-container">
                      <video className="video-stream html5-main-video"></video>
                    </div>
                    <div className="ytp-caption-window-container"></div>
                    <div className="ytp-chrome-bottom">
                      <div className="ytp-progress-bar-container"></div>
                      <div className="ytp-chrome-controls">
                        <div className="ytp-left-controls"></div>
                        <div className="ytp-right-controls"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Ytd_player>
            </div>
          </div>
        </div>
        <div id="columns">
          <div id="primary">
            <div id="primary-inner">
              <div id="below">
                <Ydt_watch_metadata className="watch_active_metadata">
                  <div id="above_the_fold">
                    <div id="title"></div>
                    <div id="top_row"></div>
                    <div id="middle_row"></div>
                    <div id="bottom_row"></div>
                  </div>
                </Ydt_watch_metadata>
                <Ytd_comments id="comments" />
              </div>
            </div>
          </div>
          <div id="secondary">
            <div id="secondary_inner"></div>
          </div>
        </div>
      </Ydt_watch_flexy>

      <div id="primary">
        <div id="primary_inner">
          <div id="player"></div>
          <div id="below">
            <Ydt_watch_metadata className="watch_active_metadata">
              <div id="above_the_fold">
                <div id="title"></div>
                <div id="top_row"></div>
                <div id="middle_row"></div>
              </div>
            </Ydt_watch_metadata>
            <div id="secondary_inner"></div>
          </div>
        </div>
      </div>
      <div id="secondary">
        <div id="bottom_row"></div>
        <Ytd_comments id="comments"></Ytd_comments>
      </div>

      {/* video */}

      <div id="full-bleed-container">
        <div id="player-full-bleed-container">
          <div id="player-container">
            <Ytd_player id="ytd-player">
              <div id="container">
                <div className="html5-video-player ytp-transparent ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-exp-ppp-update ytp-fit-cover-video ytp-bigboards ytp-fine-scrubbing-exp ytp-hide-info-bar ytp-autonav-endscreen-cancelled-state paused-mode">
                  <div className="html5-video-container">
                    <video className="video-stream html5-main-video"></video>
                  </div>
                  <div className="ytp-caption-window-container"></div>
                  <div className="ytp-chrome-bottom">
                    <div className="ytp-progress-bar-container"></div>
                    <div className="ytp-chrome-controls">
                      <div className="ytp-left-controls"></div>
                      <div className="ytp-right-controls"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Ytd_player>
          </div>
        </div>
      </div>

      <div id="player">
        <div id="player-container-outer">
          <div id="player-container-inner">
            <div id="player-container">
              <Ytd_player id="ytd-player">
                <div id="container">
                  <div className="html5-video-player ytp-transparent ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-exp-ppp-update ytp-fit-cover-video ytp-bigboards ytp-fine-scrubbing-exp ytp-hide-info-bar ytp-autonav-endscreen-cancelled-state paused-mode">
                    <div className="html5-video-container">
                      <video className="video-stream html5-main-video"></video>
                    </div>
                    <div className="ytp-caption-window-container"></div>
                    <div className="ytp-chrome-bottom">
                      <div className="ytp-progress-bar-container"></div>
                      <div className="ytp-chrome-controls">
                        <div className="ytp-left-controls"></div>
                        <div className="ytp-right-controls"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Ytd_player>
            </div>
          </div>
        </div>
      </div>

      {/* full-bleed */}
      <div></div>
      {/* <button
        className="ytp-size-button ytp-button"
        aria-keyshortcuts="t"
        data-priority="7"
        data-title-no-tooltip="기본 보기"
        aria-label="기본 보기 단축키 t"
        title="기본 보기(t)"
      >
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <use className="ytp-svg-shadow" xlink:href="#ytp-id-57"></use>
          <path
            d="m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z"
            fill="#fff"
            fill-rule="evenodd"
            id="ytp-id-57"
          ></path>
        </svg>
      </button>

      <button
        class="ytp-size-button ytp-button"
        aria-keyshortcuts="t"
        data-priority="7"
        data-title-no-tooltip="영화관 모드"
        aria-label="영화관 모드 단축키 t"
        title="영화관 모드(t)"
      >
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <use class="ytp-svg-shadow" xlink:href="#ytp-id-62"></use>
          <path
            d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z"
            fill="#fff"
            fill-rule="evenodd"
            id="ytp-id-62"
          ></path>
        </svg>
      </button> */}
    </>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
