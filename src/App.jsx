import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

function App() {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      text: 'Горные походы открывают удивительные природные ландшафт',
      date: new Date(),
    },
    {
      title: 'Поход в годы',
      text: 'Думал, что очень много времени',
      date: new Date()
    }
  ]
  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {
            data.map((item, index) => {
              return (
                <CardButton key={index}>
                  <JournalItem
                    title={item.title}
                    text={item.text}
                    date={item.date}
                  />
                </CardButton>
              )
            })
          }
        </JournalList>
      </LeftPanel>
      <Body></Body>
    </div>
  )
}

export default App
