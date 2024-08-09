

export const TodoDateTime = () =>{ 

      const samay = new Date();
      const syillDate = samay.toLocaleDateString();
      const stillTime = samay.toLocaleTimeString();

      return <h5 className = "date-tme">{syillDate} - {stillTime}</h5>
}