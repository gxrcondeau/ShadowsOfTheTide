import { Player } from "../core/Player.ts";

export class AuthHelper {
  private player!: Player;

  public IsPlayer(): boolean {
    if (localStorage.getItem("currentPlayer")) {
      return true;
    } else {
      return false;
    }
  }

  public CreatePlayer(username: string): Player {
    let newPlayer: Player = new Player(username);

    return newPlayer;
  }

  public ReadPlayer(): Player {
    let username: string = String(localStorage.getItem("currentPlayer"));
    let player: Player = new Player(username);

    return player;
  }

  public SetPlayer(player: Player) {
    this.player = player;
  }

  public GetPlayer(): Player {
    return this.player;
  }
}
