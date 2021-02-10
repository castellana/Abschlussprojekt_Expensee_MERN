import ChartData from '../components/ChartData';
import ChartBalken from '../components/ChartBalken';
// import KategorieBox from '../components/KategorieBox';
import KategorieItem from '../components/KategorieItem';

import Toggle from '../components/Toggle';

const Charts = () => {
  return (
    <section className="charts-wrapper">
      <div className="chart-data">
        <ChartData />
        <ChartBalken />
      </div>

      <div className="kategorie-wrapper">
        <Toggle title="Einnahmen" howmuch={'3003,87€'} farbe={'blau'}>
          <div className="sub-item">
            <KategorieItem
              what={'Lohn'}
              howmuch={'23,87€'}
              farbe={'dunkelblau'}
            />
            <KategorieItem
              what={'Lotto Gewinn'}
              howmuch={'223,87€'}
              farbe={'dunkelblau'}
            />
          </div>
        </Toggle>
        <Toggle title="Ausgaben" howmuch={'-523,87€'} farbe={'rot'}>
          <div className="sub-item">
            <KategorieItem what={'Lebensmittel'} howmuch={'23,87€'} />
            <KategorieItem what={'Shopping'} howmuch={'123,87€'} />
            <KategorieItem what={'Wohnen'} howmuch={'623,87€'} />
            <KategorieItem what={'Mobilität'} howmuch={'323,17€'} />
            <KategorieItem what={'Freizeit'} howmuch={'93,87€'} />
          </div>
        </Toggle>
        <Toggle title="Fixkosten" howmuch={'-703,87€'} farbe={'grau'}>
          <div className="sub-item">
            <KategorieItem what={'Wohnen'} howmuch={'23,87€'} />
            <KategorieItem what={'Strom'} howmuch={'123,87€'} />
            <KategorieItem what={'Heizungkosten'} howmuch={'623,87€'} />
            <KategorieItem what={'Abos'} howmuch={'323,17€'} />
            <KategorieItem what={'Netflix'} howmuch={'93,87€'} />
          </div>
        </Toggle>
        <hr className="strich-rechnung" />
        <div className="kategorie-box">
          <div className="kategorie-box-title gelb">
            <h2>Guthaben</h2>
            <h2>1776.42</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
