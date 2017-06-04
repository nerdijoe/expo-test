import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'

class CardList extends React.Component {
  static navigationOptions = {
    title: 'Cards',
  };
  render() {
    // const { goBack } = this.props.navigation;
    return (
      <View>
        <ScrollView >
          <View style={styles.container}>
            {this.props.cards.map( card => {
              return (
                <TouchableOpacity key={card._id} style={styles.card} onPress={() => {this.onPressHandler(card)}}>
                  <Image
                    style={styles.cardImage}
                    source={{uri: `http://www.clashapi.xyz/images/cards/${card.idName}.png`}}
                  />

                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}



const styles = {
  cardImage: {
    width: 212/4,
    height: 263/4
  },
  container: {
    display: 'flex',
    padding: 20,
    marginTop: 40,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'column',
    margin: 3,
    borderRadius: 8,
    borderStyle: 'solid',
    alignItems: 'center',
    borderWidth: 0
  },
  cardDesc: {
    fontSize: 5,
    padding: 10
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardReducer.data,
  }
}

const connectedCardList = connect(mapStateToProps,null)(CardList)
export default connectedCardList
