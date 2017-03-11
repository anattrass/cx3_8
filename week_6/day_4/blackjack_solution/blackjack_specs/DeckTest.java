import static org.junit.Assert.*;
import org.junit.*;
import java.util.ArrayList;
import blackjack.*;

public class DeckTest {
  Deck deck;
  Player player;

  @Before
  public void beforeEach() {
    deck = new Deck(new ArrayList<Card>());
    player = new Player("Jarrod", new Hand());
  }

  @Test
  public void canDealCard() {
    deck.dealCard(player);
    assertEquals(1, player.getHandValue());
  }
}
