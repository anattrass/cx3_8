package blackjack;

import java.util.ArrayList;

public class Game {
  private Player[] players;
  private Deck deck;
  private Log log;

  public Game(Player[] players, Deck deck, Log log) {
    this.players = players;
    this.deck = deck;
    this.log = log;
  }

  private void dealCards() {
    Card card;

    for (Player player : players) {
      log.add(player.getName());

      card = deck.dealCard(player);
      log.add(card.toString());

      card = deck.dealCard(player);
      log.add(card.toString());

      String total = "Total: " + player.getHandValue();
      log.add(total);
      log.add("");
    }
  }

  private void findWinner() {
    int indexOfWinner = players[0].getHandValue() > players[1].getHandValue() ? 0 : 1;
    String result = players[indexOfWinner].getName() + " wins!";
    log.add(result);
  }

  public void play() {
    deck.shuffle();
    dealCards();
    findWinner();
    log.print();
  }
}
