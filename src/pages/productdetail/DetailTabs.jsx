import { Tab, Tabs } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";
import { useState } from "react";
import Reviews from "./Reviews";

const DetailTabs = ({ detail }) => {
  const [value, setValue] = useState("description");

  const handleChange = (e, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div>
      <div className="text-normal">
        <TabContext value={value}>
          <div>
            <Tabs value={value} onChange={handleChange}>
              <Tab
                label="description"
                value="description"
                sx={{
                  padding: 0,
                  color: "black",
                }}
              />
              <Tab
                label="Additional Information"
                value="additional_information"
              />
              <Tab label="Reviews" value="reviews" />
            </Tabs>
          </div>
          <div className="max-w-[70ch]">
            <TabPanel
              value="description"
              sx={{
                padding: 0,
                marginTop: 2,
              }}
            >
              {detail?.description}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, similique quis? Temporibus qui laboriosam architecto
              vero maiores repudiandae corporis! Ex a dolor, quos similique
              adipisci praesentium accusantium beatae rem aspernatur, expedita
              tempora! Sunt ullam voluptates saepe vitae magnam? Facilis, optio.
            </TabPanel>
          </div>

          <div className="max-w-[70ch]">
            <TabPanel
              value="additional_information"
              sx={{
                padding: 0,
                marginTop: 2,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quam aut numquam ratione consequatur quidem suscipit excepturi
              soluta totam, commodi nihil in earum reprehenderit voluptatum
              saepe iure optio ad fugiat rerum, adipisci corrupti odio! Officiis
              vitae provident eum eaque corrupti.
            </TabPanel>
          </div>
          <div>
            <TabPanel
              value="reviews"
              sx={{
                padding: 0,
                marginTop: 2,
              }}
            >
              <Reviews />
            </TabPanel>
          </div>
        </TabContext>
      </div>
    </div>
  );
};

export default DetailTabs;
