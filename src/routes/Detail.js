import './Detail.css';
import React from 'react';

class Detail extends React.Component {

  constructor (props) {
    super(props);
    const { location, history } = this.props;
    if (!location.state) {
      // history.push('/');
    }
  }

  render() {
    const { location } = this.props;

    if (!location.state) {
      // return null;
      location.state = {
            "year": 1999,
            "title": "Instinct",
            "summary": "Nearly two years after having gone amiss in Africa, renowned anthropologist Dr. Ethan Powell (Sir Anthony Hopkins) is caught committing a crime and subsequently imprisoned in a Florida mental institution, where aspiring psychiatrist Dr. Theo Caulder (Cuba Gooding, Jr.) takes over his important case. Dr. Powell, who has been with a group of gorillas during all that time, is not talking at all, and seems to be living in a dreamworld. Very slowly, Dr. Caulder manages to reach Ethan and starts finding out why he killed two of the poachers. Yet, Theo's case is not just about why the murders have happened, but also about how Dr. Powell became the being he is in the first place. With Ethan's silence broken, Theo is introduced into a world beyond common human comprehension: The true nature of being. He learns that mankind's control of everything is a mere illusion and that the true values of existence can't be found so easily. Ethan changes Theo's view of things forever.",
            "genres": [
              "Drama",
              "Thriller"
            ],
            "coverImg": "https://yts.mx/assets/images/movies/instinct_1999/medium-cover.jpg",
            "bgImg": "https://yts.mx/assets/images/movies/instinct_1999/background.jpg"
          }
    }

    console.log(location);

    return (
      <div className="container">
        <div className="detail-wrapper">
          <div className="detail">
            <img className="detail__cover" src={ location.state.coverImg }/>
            <div className="detail__data">
              <h1 className="detail__title">{ location.state.title }</h1>
              <div className="detail__year">{ location.state.year }</div>
              <div className="detail__genres">{ location.state.genres }</div>
              <p className="detail__summary">{ location.state.summary }</p>
            </div>
          </div>
          <img className="bg" src={ location.state.bgImg }/>
        </div>
      </div>
    )
  }
}

export default Detail;
