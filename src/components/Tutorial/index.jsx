import "./index.css";
import { Row, Col } from "antd";

const Tutorial = () => {
  return (
    <div className="tutorial">
      <div>
        <h3 align="center" className="heading">
          I. Three type of magic quills
        </h3>

        <div align="center">
          <img
            src={`${import.meta.env.BASE_URL}tutorials/brush_edge_add.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          <br />
          Use the <b>add brush</b> to add details and elements guided by prompts
          - express your ideas with your own lively strokes!
          <br />
        </div>
        <Row>
          <Col xs={24} md={12}>
            <div align="center">
              <br />
              <img
                src={`${import.meta.env.BASE_URL}gallery/deer.gif`}
                alt="gif description"
                className="gif"
              />
            </div>
            <div align="center">
              <small>
                "With just a few strokes, a vivid little deer comes to life"
              </small>
              <br />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div align="center">
              <br />
              <img
                src={`${import.meta.env.BASE_URL}gallery/necklace.gif`}
                alt="gif description"
                className="gif"
              />
            </div>
            <div align="center">
              <small> "Adorn the beautiful lady with a necklace"</small>
              <br />
            </div>
          </Col>
        </Row>

        <div align="center">
          <br />
          <img
            src={`${import.meta.env.BASE_URL}tutorials/brush_edge_remove.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          <br />
          The <b>subtract brush</b> can remove excess details or redraw areas
          based on prompts. If there's anything you're not satisfied with, just
          subtract it away!
          <br />
        </div>
        <Row>
          <Col xs={24} md={12}>
            <div align="center">
              <br />
              <img
                src={`${import.meta.env.BASE_URL}gallery/dolphin.gif`}
                alt="gif description"
                className="gif"
              />
            </div>

            <div align="center">
              <small>
                "A dolphin with two tail fins? Let's give it a quick
                'treatment'!"
              </small>
              <br />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div align="center">
              <br />
              <img
                src={`${import.meta.env.BASE_URL}gallery/skeleton cowboy.gif`}
                alt="gif description"
                className="gif"
              />
            </div>

            <div align="center">
              <small>
                "Let's take off Mr. Skeleton's hat and help him cool down."
              </small>
              <br />
              <br />
            </div>
          </Col>
        </Row>

        <div
          align="center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <br />
          <img
            src={`${import.meta.env.BASE_URL}tutorials/brush_edge_add.svg`}
            alt="add brush"
            className="icon"
            width="100"
          />
          <span>&</span>
          <img
            src={`${import.meta.env.BASE_URL}tutorials/brush_edge_remove.svg`}
            alt="minus brush"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          <br />
          Combine the <b>add and subtract brushes</b> to create amazing combo
          effects!
          <br />
        </div>

        <Row>
          <Col xs={24} md={12}>
            <div align="center">
              <br />
              <img
                src={`${import.meta.env.BASE_URL}gallery/mona lisa cat.gif`}
                alt="gif description"
                className="gif"
              />
            </div>
            <div align="center">
              <small> "Let's give Mona Lisa a pet cat~"</small>
              <br />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div align="center">
              <br />
              <img
                src={`${import.meta.env.BASE_URL}gallery/handsome bowtie.gif`}
                alt="gif description"
                className="gif"
              />
            </div>
            <div align="center">
              <small> "Let's give this handsome fellow a new tie!"</small>
              <br />
              <br />
            </div>
          </Col>
        </Row>

        <div align="center">
          <img
            src={`${import.meta.env.BASE_URL}tutorials/brush.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          <br />
          The <b>color brush</b> can precisely color the image, matching the
          color of your brush~
          <br />
        </div>

        <Row>
          <Col xs={24} md={12}>
            <div align="center">
              <br />
              <img
                src={`${import.meta.env.BASE_URL}gallery/beautiful hair.gif`}
                alt="gif description"
                className="gif"
              />
            </div>
            <div align="center">
              <small>
                "Precise color highlighting - paint exactly where you want to
                color"
              </small>
              <br />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div align="center">
              <br />
              <img
                src={`${import.meta.env.BASE_URL}gallery/cake flowers.gif`}
                alt="gif description"
                className="gif"
              />
            </div>
            <div align="center">
              <small>
                "Don't you think the blue flowers look more dreamy than the pink
                ones?"
              </small>
              <br />
              <br />
            </div>
          </Col>
        </Row>

        <div align="center">
          *Please note the color brush and add&subtract brush are mutually
          exclusive - you can only use one at a time!
          <br />
          <br />
        </div>

        <hr />
        <h3 align="center" className="heading">
          II. Draw and Guess
        </h3>

        <div align="center">
          <img
            src={`${import.meta.env.BASE_URL}tutorials/wand.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          Our brush is super smart! Look at the examples above - as soon as you
          finish drawing, it quickly guesses what you want to create and fills
          in the prompts for you~ Sometimes it might guess wrong though, so feel
          free to tell it what you actually want to draw~
          <br />
        </div>

        <Row justify="center">
          <Col xs={24} md={12}>
            <div align="center">
              <br />
              <img
                src={`${import.meta.env.BASE_URL}gallery/path.gif`}
                alt="gif description"
                className="gif"
              />
            </div>
            <div align="center">
              <small>
                "Oops! I don't want to draw a vine, I want to create a path!"
              </small>
              <br />
              <br />
            </div>
          </Col>
        </Row>

        <hr />
        <h3 align="center" className="heading">
          III. Super useful canvas tools!
        </h3>

        <div align="center">
          <br />
          <img
            src={`${import.meta.env.BASE_URL}tutorials/upload.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          Click this button to upload the photo you want to edit~
          <br />
        </div>

        <div align="center">
          <br />
          <img
            src={`${import.meta.env.BASE_URL}tutorials/eraser.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          Made a mistake with the brush? Just erase it with the rubber tool!
          <br />
        </div>

        <div align="center">
          <br />
          <img
            src={`${import.meta.env.BASE_URL}tutorials/cursor.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          Drag, rotate, and resize your strokes with the cursor - just like when
          you're working in PowerPoint!
          <br />
        </div>

        <br />
        <div
          align="center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}tutorials/undo.svg`}
            alt="add brush"
            className="icon"
            width="100"
          />
          <span>&</span>
          <img
            src={`${import.meta.env.BASE_URL}tutorials/redo.svg`}
            alt="minus brush"
            className="icon"
            width="100"
          />
        </div>
        <div align="center">
          Left is ctrl+z, right is ctrl+y - you know what that means! 😊
          <br />
          And for Mac users, left is command+z, right is command+shift+z! 😝
          <br />
        </div>

        <div align="center">
          <br />
          <img
            src={`${import.meta.env.BASE_URL}tutorials/delete.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          Oops! That doesn't look right 😵 - click this trash bin to delete the
          stroke
          <br />
        </div>

        <div align="center">
          <br />
          <img
            src={`${import.meta.env.BASE_URL}tutorials/eye.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          The brush strokes are in my way, how can I see the image😡?! Try
          clicking this button to temporarily hide your strokes
          <br />
        </div>
        <br />
        <div
          align="center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}tutorials/accept.svg`}
            alt="add brush"
            className="icon"
            width="100"
          />
          <span>&</span>
          <img
            src={`${import.meta.env.BASE_URL}tutorials/discard.svg`}
            alt="minus brush"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          These two icons will appear after the image is generated...
          <br />
          I love this generated image 😍, I want to keep editing! ➡️ Click ✅ to
          continue editing
          <br />
          What is this thing 😡, I don't want to see it! ➡️ Click ❎ to discard
          the result
          <br />
          <br />
        </div>

        <hr />
        <h3 align="center" className="heading">
          IV. Notes
        </h3>

        <div align="center">
          <br />
          <img
            src={`${import.meta.env.BASE_URL}tutorials/loading.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          When you see the spinning icon in the bottom left corner, it means the
          magicquill is still charging up 💪 Wait for it to disappear before
          clicking the Run button!
          <br />
        </div>

        <div align="center">
          <br />
          <img
            src={`${import.meta.env.BASE_URL}tutorials/wand.svg`}
            alt="SVG image"
            className="icon"
            width="100"
          />
        </div>

        <div align="center">
          When the magic wand is flashing, our brush is working hard to guess
          what you're trying to draw 🤔 Please be patient! 🙏
          <br />
          <br />
        </div>

        <hr />
        <h3 align="center" className="heading">
          V. Parameters
        </h3>

        <div align="center">
          <br />
          If you've made it here, you must really love our work! 😍
          <br />
          If you want to learn how to better control the generation results,
          don't miss this section! 😘
          <br />
          Next to the Run button, you can select parameters to modify advanced
          settings 🧐
          <br />
        </div>

        <div>
          <ul>
            <li>
              <u>Base Model Name</u>: Users can adjust this to select
              appropriate base models for different editing styles
              <ul>
                <li>
                  <a href="https://civitai.com/models/4201/realistic-vision-v60-b1">
                    SD1.5/realisticVisionV60B1_v51VAE.safetensors
                  </a>
                  : This generates realistic style images! Use this most of the
                  time.
                </li>
                <li>
                  <a href="https://civitai.com/models/4384?modelVersionId=128713">
                    SD1.5/DreamShaper.safetensors
                  </a>
                  : This one is for generating fantasy style images
                </li>
                <li>
                  <a href="https://civitai.com/models/43331/majicmix-realistic">
                    SD1.5/majicMIX_realistic
                  </a>
                  : This one is good at generating portraits 👩
                </li>
                <li>
                  <a href="https://civitai.com/models/7240?modelVersionId=948574">
                    SD1.5/MeinaMix.safetensors
                  </a>
                  : This one is good at generating anime images.
                </li>
                <li>
                  <a href="https://civitai.com/models/36520/ghostmix">
                    SD1.5/ghostmix_v20Bakedvae.safetensors
                  </a>
                  : Another model for anime image generation.
                </li>
                <li>If there are any models you'd like to add, contact us!</li>
              </ul>
            </li>
            <li>
              <u>Negative Prompt</u>: Users can input content they want the
              model to avoid generating. Whatever you don't want to generate,
              put it here.
            </li>
            <li>
              <u>Fine Edge</u>: Users can enable this option to activate fine
              edge control.
            </li>
            <li>
              <u>Grow Size</u>: Adjust this parameter to set the pixel range
              affected around brush strokes when editing images, to
              expand/reduce the brush stroke influence area.
            </li>
            <li>
              <u>Edge Strength</u>: Parameter for adjusting the add/subtract
              brush control strength. Simply put, if you're confident in your
              drawing skills, you can increase strength. If you're a bad drawer
              like us 🤦, please keep the parameter as is, or reduce the
              strength a bit.
            </li>
            <li>
              <u>Color Strength</u>: Parameter for adjusting the color brush
              control strength, can adjust the image's coloring effects.
            </li>
            <li>
              The remaining parameters are just some common parameters for
              diffusion models! You basically don't need to manage these, but if
              you're in the industry/AI art expert, feel free to try adjusting
              them~
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
