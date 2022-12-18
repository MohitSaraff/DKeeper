import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper {
  type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote (titleText: Text, contentText: Text) {
    let newNote: Note = {
      title = titleText;
      content = contentText;
    };
    notes := List.push(newNote, notes);
  };

  public query func readNote(): async [Note] {
    return List.toArray(notes);
  };

  public func deleteNote (index: Nat) {
    let takeNote = List.take(notes, index);
    let dropNote = List.drop(notes, (index+1));
    notes := List.append(takeNote, dropNote);
  }
}