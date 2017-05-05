import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from './style.css';
import CmApplication from './modules/CmApplication';
import CmObjects from './modules/CmObjects';
import CmGenericTab from './modules/generic/CmGenericTab';

import CmCampaignsTab from './modules/campaigns/CmCampaignsTab';
import CmCampaignsList from './modules/campaigns/list/CmCampaignsList';
import CmCampaignsNew from './modules/campaigns/new/CmCampaignsNew';
import CmCampaignsModify from './modules/campaigns/modify/CmCampaignsModify';
import CmCampaignsView from './modules/campaigns/view/CmCampaignsView';

import CmJobsTab from './modules/jobs/CmJobsTab';
import CmJobsList from './modules/jobs/list/CmJobsList';
import CmJobsNew from './modules/jobs/new/CmJobsNew';
import CmJobsModify from './modules/jobs/modify/CmJobsModify';
import CmJobsView from './modules/jobs/view/CmJobsView';

import CmSchemataTab from './modules/schemata/CmSchemataTab';
import CmSchemataList from './modules/schemata/list/CmSchemataList';
import CmSchemataNew from './modules/schemata/new/CmSchemataNew';
import CmSchemataModify from './modules/schemata/modify/CmSchemataModify';
import CmSchemataView from './modules/schemata/view/CmSchemataView';

import CmRoutesTab from './modules/routes/CmRoutesTab';
import CmRoutesList from './modules/routes/list/CmRoutesList';
import CmRoutesNew from './modules/routes/new/CmRoutesNew';
import CmRoutesModify from './modules/routes/modify/CmRoutesModify';
import CmRoutesView from './modules/routes/view/CmRoutesView';

import CmTargetsTab from './modules/targets/CmTargetsTab';
import CmTargetsList from './modules/targets/list/CmTargetsList';
import CmTargetsNew from './modules/targets/new/CmTargetsNew';
import CmTargetsModify from './modules/targets/modify/CmTargetsModify';
import CmTargetsView from './modules/targets/view/CmTargetsView';

import CmTransformationsTab from './modules/transformations/CmTransformationsTab';
import CmTransformationsList from './modules/transformations/list/CmTransformationsList';
import CmTransformationsNew from './modules/transformations/new/CmTransformationsNew';
import CmTransformationsModify from './modules/transformations/modify/CmTransformationsModify';
import CmTransformationsView from './modules/transformations/view/CmTransformationsView';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Redirect from="/" to="jobs/list" />
          <Route path="/" component={CmApplication}>
            <IndexRoute component={CmGenericTab} />
            <Route path="jobs" component={CmJobsTab}>
              <Route path="list" component={CmJobsList}/>
              <Route path="new" component={CmJobsNew}/>
              <Route path="modify" component={CmJobsModify}/>
              <Route path="view" component={CmJobsView}/>
            </Route>
            <Route path="campaigns" component={CmCampaignsTab}>
              <Route path="list" component={CmCampaignsList}/>
              <Route path="new" component={CmCampaignsNew}/>
              <Route path="modify" component={CmCampaignsModify}/>
              <Route path="view" component={CmCampaignsView}/>
            </Route>
            <Route path="schemata" component={CmSchemataTab}>
              <Route path="list" component={CmSchemataList}/>
              <Route path="new" component={CmSchemataNew}/>
              <Route path="modify" component={CmSchemataModify}/>
              <Route path="view" component={CmSchemataView}/>
            </Route>
            <Route path="routes" component={CmRoutesTab}>
              <Route path="list" component={CmRoutesList}/>
              <Route path="new" component={CmRoutesNew}/>
              <Route path="modify" component={CmRoutesModify}/>
              <Route path="view" component={CmRoutesView}/>
            </Route>
            <Route path="targets" component={CmTargetsTab}>
              <Route path="list" component={CmTargetsList}/>
              <Route path="new" component={CmTargetsNew}/>
              <Route path="modify" component={CmTargetsModify}/>
              <Route path="view" component={CmTargetsView}/>
            </Route>
            <Route path="transformations" component={CmTransformationsTab}>
              <Route path="list" component={CmTransformationsList}/>
              <Route path="new" component={CmTransformationsNew}/>
              <Route path="modify" component={CmTransformationsModify}/>
              <Route path="view" component={CmTransformationsView}/>
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
