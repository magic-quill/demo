import Gallery from "./components/Gallery";
import Authors from "./components/Authors";
import Tutorial from "./components/Tutorial";
import { useRef, useEffect } from "react";
import { Button, Row, Col } from "antd";
import {
  FilePdfOutlined,
  GithubOutlined,
  AlipayOutlined,
} from "@ant-design/icons";

import "./App.css";

function App() {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.currentTime = 1;
  }, []);

  return (
    <>
      <div style={{ margin: "auto" }}>
        <div className="content">
          <h1 className="title-primary">
            <img
              style={{ width: "20rem", height: "4rem", objectFit: "cover" }}
              src={`${import.meta.env.BASE_URL}DT-logo.gif`}
              alt="MagicQuill"
            />
            <br />
            An Intelligent Interactive Image Editing System
          </h1>
          <div className="authors">
            <div>
              <a href="https://zliucz.github.io/">Zichen Liu</a>
              <sup>*,1,2</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://bruceyyu.github.io/">Yue Yu</a>
              <sup>*,1,2</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://ken-ouyang.github.io/">Hao Ouyang</a>
              <sup>2</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://github.com/qiuyu96">Qiuyu Wang</a>
              <sup>2</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://felixcheng97.github.io/">Ka Leong Cheng</a>
              <sup>1,2</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://github.com/encounter1997">Wen Wang</a>
              <sup>3,2</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://johanan528.github.io/">Zhiheng Liu</a>
              <sup>4</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://cqf.io/">Qifeng Chen</a>
              <sup>1</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://shenyujun.github.io/">Yujun Shen</a>
              <sup>2</sup>
            </div>
          </div>
          <div style={{ textAlign: "center", marginBlock: "1rem" }}>
            <div>
              <sup>1</sup> HKUST, <sup>2</sup> Ant Group, <sup>3</sup> ZJU,{" "}
              <sup>4</sup> HKU
            </div>
            <div>
              <sup>*</sup> indicates equal contribution
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <Button
              shape="round"
              size="large"
              icon={<FilePdfOutlined />}
              style={{ margin: "0.5rem" }}
              href="#"
            >
              paper (coming soon)
            </Button>
            <Button
              shape="round"
              size="large"
              icon={<GithubOutlined />}
              style={{ margin: "0.5rem" }}
              href="https://github.com/magic-quill/magicquill"
            >
              code
            </Button>
            <Button
              shape="round"
              size="large"
              icon="🤗"
              style={{ margin: "0.5rem" }}
              href="https://huggingface.co/spaces/AI4Editing/MagicQuill"
            >
              Hugging Face demo
            </Button>
            <Button
              shape="round"
              size="large"
              icon={<AlipayOutlined />}
              style={{ margin: "0.5rem" }}
              href="http://magic.chenjunfeng.xyz"
            >
              web demo (Alipay Cloud)
            </Button>
          </div>
          {/* <div className="nav-bar">
            {navList.map((nav, idx) => {
              return <div key={idx} className="nav-item">{nav}</div>;
            })}
          </div> */}
        </div>

        <hr className="divider" />
        <div className="content">
          <video
            src={`${import.meta.env.BASE_URL}magicquill.mp4`}
            ref={vidRef}
            controls
            autoPlay
            style={{ width: "100%" }}
          />
          <div style={{ textAlign: "center", marginBlock: "1rem" }}>
            🎵 We recommend watching the video with sound on 🎵 <br />
            Watch on{" "}
            <a href="https://www.youtube.com/watch?v=5DiKfONMnE4">YouTube</a>
          </div>
        </div>
        <div className="gray-bg">
          <div className="content">
            <h2 className="title">TL;DR</h2>
            <div
              className="text"
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              MagicQuill is an intelligent and interactive system achieving
              precise image editing. <br />
              Key Features: 😎 User-friendly interface / 🤖 AI-powered
              suggestions / 🎨 Precise local editing
            </div>
            <h2 className="title">Abstract</h2>
            <div className="text" style={{ width: "90%", margin: "auto" }}>
              As a highly practical application, image editing encounters a
              variety of user demands and thus prioritizes excellent ease of
              use. In this paper, we unveil MagicQuill, an integrated image
              editing system designed to support users in swiftly actualizing
              their creativity. Our system starts with a streamlined yet
              functionally robust interface, enabling users to articulate their
              ideas (e.g., inserting elements, erasing objects, altering color,
              etc.) with just a few strokes. These interactions are then
              monitored by a multimodal large language model (MLLM) to
              anticipate user intentions in real time, bypassing the need for
              prompt entry. Finally, we apply the powerful diffusion prior,
              enhanced by a carefully learned two-branch plug-in module, to
              process the editing request with precise control.
            </div>
          </div>
        </div>

        <div className="content">
          <Gallery />
        </div>

        <div className="gray-bg">
          <div className="content">
            <Authors />
          </div>
        </div>

        <div className="content">
          <h2 className="title">Tutorial</h2>
          <Tutorial />
          <br />
          <hr />
        </div>

        <div className="content">
          <h2 className="title">Bibtex</h2>
          <div
            className="gray-bg"
            style={{ padding: "0.5rem 1rem", overflow: "scroll" }}
          >
            <pre>
              <code style={{ overflow: "scroll" }}>
                {
                  "@article{liu2024magicquill, \n\ttitle={MagicQuill: An Intelligent Interactive Image Editing System}, \n\tauthor={Zichen Liu and Yue Yu and Hao Ouyang and Qiuyu Wang and Ka Leong Cheng and Wen Wang and Zhiheng Liu and Qifeng Chen and Yujun Shen}, \n\tyear={2024}, \n\teprint={xxxx.xxxxx}, \n\tarchivePrefix={arXiv}, \n\tprimaryClass={cs.CV}\n}"
                }
              </code>
            </pre>
          </div>
        </div>
        <br />
        <br />
        <hr className="divider" />
        <div className="content">
          <div>
            Want to create a logo with text animation? Check out{" "}
            <a href="https://animate-your-word.github.io/demo/">
              Dynamic Typography
            </a>
            .
          </div>
          <br />
          <div>
            This website is licensed under a{" "}
            <a href="http://creativecommons.org/licenses/by-sa/4.0/">
              Creative Commons Attribution-ShareAlike 4.0 International License
            </a>
            .
          </div>
          <br />
          <div>
            You are welcome to use the{" "}
            <a href="https://github.com/magic-quill/demo">source code</a> of
            this website, but we kindly request that you provide a link back to
            this page in the footer. Please remember to remove any analytics
            code from the header that you do not wish to include on your own
            website.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
