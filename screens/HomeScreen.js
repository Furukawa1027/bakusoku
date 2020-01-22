import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ButtonGroup, ListItem } from 'react-native-elements';

const ALL_INDEX = 0; 

const GREAT = 'sentiment-very-satisfied';
const GREAT_INDEX = 1;
const GREAT_COLOR = 'red'; 

const GOOD = 'sentiment-satisfied';
const GOOD_INDEX = 2;
const GOOD_COLOR = 'orange'; 

const POOR = 'sentiment-dissatisfied';
const POOR_INDEX = 3;
const POOR_COLOR = 'blue'; 

const allReviewsTmp = [
  {
    country: 'USA',
    dateFrom: 'Jan/15/2018',
    dateTo: 'Jan/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: GREAT,
  },
  {
    country: 'USA',
    dateFrom: 'Feb/15/2018',
    dateTo: 'Feb/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: GOOD,
  },
  {
    country: 'USA',
    dateFrom: 'Mar/15/2018',
    dateTo: 'Mar/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: POOR,
  },
];


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: ALL_INDEX, // ← 変更部分
    };
  }

  renderReviews() {
    let reviewRank;

    switch (this.state.selectedIndex) {
      case GREAT_INDEX:
        reviewRank = GREAT;
        break;

      case GOOD_INDEX:
        reviewRank = GOOD;
        break;

      case POOR_INDEX:
        reviewRank = POOR;
        break;

      default:
        break;
    }

    let rankedReviews = [];

    // もし`this.state.selectedIndex`が`ALL_INDEX`だったら、
    if (this.state.selectedIndex === ALL_INDEX) { // ←追記部分
      // 丸ごとコピー
      rankedReviews = allReviewsTmp; // ←追記部分
    // もしそうじゃなかったら、
    } else { // ←追記部分
      // 繰り返し処理
      for (let i = 0; i < allReviewsTmp.length; i++) {
        if (allReviewsTmp[i].rank === reviewRank) {
          rankedReviews.push(allReviewsTmp[i]);
        }
      }
    } 

    return (
      <ScrollView>
        {rankedReviews.map((review, index) => {
          let reviewColor;

          switch (review.rank) {
            case GREAT:
              reviewColor = GREAT_COLOR;
              break;

            case GOOD:
              reviewColor = GOOD_COLOR;
              break;

            case POOR:
              reviewColor = POOR_COLOR;
              break;

            default:
              break;
          }

          return (
            <ListItem
              key={index}
              leftIcon={{ name: review.rank, color: reviewColor }}
              title={review.country}
              subtitle={`${review.dateFrom} ~ ${review.dateTo}`}
              onPress={() => this.onListItemPress(review)}
            />
          );
        })}
      </ScrollView>
    );
  }


  onButtonGroupPress = (selectedIndex) => {
    this.setState({
      selectedIndex: selectedIndex
      // selectedIndex: selectedIndex → selectedIndex と省略しても可
    });
  }
  
  render() {
    const buttonList = [
      'すべて',
      'グレート (0)',
      'グッド (0)',
      'Poor (0)',
    ];
  
    return (
      <View style={{ flex: 1 }}>
        <ButtonGroup
          buttons={buttonList}
          selectedIndex={this.state.selectedIndex}
          onPress={this.onButtonGroupPress} // ←追記部分
        />
        {this.renderReviews()} 
      </View>
    );
  }
}


export default HomeScreen;