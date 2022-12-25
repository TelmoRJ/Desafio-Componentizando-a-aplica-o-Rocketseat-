import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  selectedGenre: GenreResponseProps;
  genres: GenreResponseProps[]
  handleClickButton: (id: number) => void
  selectedGenreId: number
}

export function SideBar({ selectedGenre, genres, handleClickButton, selectedGenreId }: SideBarProps) {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}