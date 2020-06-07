# Project Overview

## Project Name

Studio Ghibli

## Project Description

This project aims to build a simple website that showcases the film collection from Stuio Ghibli, which creates amazing storytelling and worldbuilding. 

## API and Data Sample

The major part of the project uses the APIs from https://ghibliapi.herokuapp.com/.

The second API will be OMDb to retrieve poster info: http://www.omdbapi.com/

Additional APIs can be added to post-MVP:
- IMDb trailer API for movie trailers
- Wikipedia API for About


#### API Data Sample
```json
[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95"
  },
  {
    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies",
    "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "release_date": "1988",
    "rt_score": "97"
  }
]
```

## Wireframes
Collection Page (Mobile): 

![Collection Page](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1590985536/Mobile_1_o8nwok.png)

## Component Hierarchy
- App
  - Header
  - About
  - Collection
    - Film Preview
    - Film Detail
      - Video
  - CTA
  - Footer

### MVP/PostMVP  
#### MVP 

- A visually appealing home page
- See the film collection from Studio Ghibli
- Choose one film and see the details of the film
- Details include title, descriptions, director, year, and poster 
- Poster image will be retrieved from the second API

#### PostMVP  
- Potentially a trailer/clip from the third API (IMDB)
- Clip/trailer and more images will open up in a modal


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 1| Project Prompt and Project Approval | Complete
|June 2| Core Application Structure and Pseudocode | Complete
|June 2| Fetch info from API(s)  | Complete
|June 3| React Components and Routes | Complete
|June 3| Additonal info | Complete
|June 4| MVP and finalize formatting | Complete
|June 5| Present | 

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1590985536/Priority_Matrix_hblzqm.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Structure | M | 2hrs| 2hrs | 2hrs |
| Basic CSS | M | 2hrs| 2hrs | 2hrs |
| Fetch films from the API | H | 4hrs| 2hrs | 2hrs|
| Create React Components and Routes | H | 7hrs| 5hrs | 5hrs |
| Fetch more info from other APIs | M | 6hrs| 4hrs | 4hrs |
| Design and Styling | M | 5hrs| 6hrs | 6hrs |
| Other Post-MVP Features| H | 4hrs| 6hrs | 6hrs |
| Total | H | 30hrs| 28hrs | 28hrs |

## Code Snippet
```javascript
export default class FilmPreview extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="film-preview">
        <Link to={`/collection/${this.props.film.title}`} key={this.props.film.id}>
          <img src={this.props.film.poster} className="film-poster"></img>
          <div>{this.props.film.title}</div>
        </Link>
      </div >
    )
  }
}
```

## Change Log
- Added post-MVP features
