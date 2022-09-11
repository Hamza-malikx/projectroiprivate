import React from "react";
import { ContractProfitBox } from "./ContractProfitBox";

interface WhaleOwnershipProps {}

export const WhaleOwnership: React.FC<WhaleOwnershipProps> = () => {
  return (
    <ContractProfitBox title="Whale Ownership">
      <div className="cp-wo-container">
        <div className="cp-wo-column">
          <div className="cp-wo-text">Top</div>
          <div className="cp-wo-text">Owns</div>
        </div>

        <div className="cp-wo-column">
          <div className="cp-wo-row-mid">
            <div className="cp-wo-inp-border-maker">
              <div className="cp-wo-inp">
                <div className="cp-wo-pcval">01</div>
                <div className="cp-wo-pc">
                  <span>%</span>
                </div>
              </div>
            </div>
            <input type="range" id="cp-wo-slider1" />
          </div>

          <div className="cp-wo-row-mid">
            <div className="cp-wo-inp-border-maker">
              <div className="cp-wo-inp">
                <div className="cp-wo-pcval">01</div>
                <div className="cp-wo-pc">
                  <span>%</span>
                </div>
              </div>
            </div>
            <input type="range" id="cp-wo-slider2" />
          </div>
        </div>

        <div className="cp-wo-column">
          <div className="cp-wo-text">of the wallets</div>
          <div className="cp-wo-text">of the tokens supply</div>
        </div>
      </div>
    </ContractProfitBox>
  );
};
