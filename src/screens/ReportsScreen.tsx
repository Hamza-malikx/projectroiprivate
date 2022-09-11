import { useState } from "react";
import Grade from "../components/Reports/Grade";
import { Community } from "../components/Reports/Commutity/Community";
import { Financials } from "../components/Reports/Financials/Financials";
import { Opportunities } from "../components/Reports/Opportunities/Opportunities";
import { Overview } from "../components/Reports/Overview/Overview";
import { ProfitScenarios } from "../components/Reports/ProfitScenarios/ProfitScenarios";
import { Purpose } from "../components/Reports/Purpose/Purpose";
import { ReportToolBar } from "../components/Reports/ReportToolBar";
import { Security } from "../components/Reports/Security/Security";
import { Team } from "../components/Reports/Team/Team";
import { oppData } from "../utils/tempData";

const ReportsScreen = () => {
  const [overviewOpen, setOverviewOpen] = useState(true);
  const [purposeOpen, setPurposeOpen] = useState(true);
  const [financialsOpen, setFinancialsOpen] = useState(true);
  const [teamOpen, setTeamOpen] = useState(true);
  const [securityOpen, setSecurityOpen] = useState(true);
  const [communityOpen, setCommunityOpen] = useState(true);
  const [opportunitiesOpen, setOpportunitiesOpen] = useState(true);
  const [profitScenariosOpen, setProfitScenariosOpen] = useState(true);

  const affectAll = (opt: boolean) => {
    setOverviewOpen(opt);
    setPurposeOpen(opt);
    setFinancialsOpen(opt);
    setTeamOpen(opt);
    setSecurityOpen(opt);
    setCommunityOpen(opt);
    setOpportunitiesOpen(opt);
    setProfitScenariosOpen(opt);
  };

  return (
    <div>
      <Grade grade="A" />
      <ReportToolBar
        collapseAll={() => affectAll(false)}
        expandAll={() => affectAll(true)}
      />
      <Overview open={overviewOpen} toggle={() => affectAll(!overviewOpen)} />
      <Purpose open={purposeOpen} toggle={() => setPurposeOpen(!purposeOpen)} />
      <Financials
        open={financialsOpen}
        toggle={() => setFinancialsOpen(!financialsOpen)}
      />
      <Team open={teamOpen} toggle={() => setTeamOpen(!teamOpen)} />
      <Security
        open={securityOpen}
        toggle={() => setSecurityOpen(!securityOpen)}
      />
      <Community
        open={communityOpen}
        toggle={() => setCommunityOpen(!communityOpen)}
      />
      <Opportunities
        data={oppData}
        open={opportunitiesOpen}
        toggle={() => setOpportunitiesOpen(!opportunitiesOpen)}
      />
      <ProfitScenarios
        open={profitScenariosOpen}
        toggle={() => setProfitScenariosOpen(!profitScenariosOpen)}
      />
    </div>
  );
};

export default ReportsScreen;
