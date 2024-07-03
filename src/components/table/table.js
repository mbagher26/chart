import { useState } from "react";
import './table.css'

function Tabel({setData}) {

   

    const [sat, setSat] = useState(undefined);
    const [sat_num, setSat_num] = useState(undefined);
    const [sun, setSun] = useState(undefined);
    const [sun_num, setSun_num] = useState(undefined);
    const [mon, setMon] = useState(undefined);
    const [mon_num, setMon_num] = useState(undefined);
    const [tues, setTues] = useState(undefined);
    const [tues_num, setTues_num] = useState(undefined);
    const [wed, setWed] = useState(undefined);
    const [wed_num, setWed_num] = useState(undefined);
    const [thurs, setThurs] = useState(undefined);
    const [thurs_num, setThurs_num] = useState(undefined);
    const [fri, setFri] = useState(undefined);
    const [fri_num, setFri_num] = useState(undefined);

    const formHandler = (e) => {
        e.preventDefault();

        const newData = [
            { day: sun, number: sun_num },
            { day: mon, number: mon_num },
            { day: tues, number: tues_num },
            { day: wed, number: wed_num },
            { day: thurs, number: thurs_num },
            { day: fri, number: fri_num },
            { day: sat, number: sat_num }
        ]

        setData(newData)


        setSat('')
        setSat_num('')
        setSun('')
        setSun_num('')
        setMon('')
        setMon_num('')
        setTues('')
        setTues_num('')
        setWed('')
        setWed_num('')
        setThurs('')
        setThurs_num('')
        setFri('')
        setFri_num('')

    }


    return (
        <div className="table-container">
            <form className="form-table" onSubmit={formHandler}>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Day</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label>Sun</label></td>
                            <td><input type="date" value={sun} onChange={(event) => { setSun(event.target.value) }} /></td>
                            <td><input type="number" value={sun_num} onChange={(event) => { setSun_num(event.target.value) }} /></td>
                        </tr>

                        <tr>
                            <td><label>Mon</label></td>
                            <td><input type="date" value={mon} onChange={(event) => { setMon(event.target.value) }} /></td>
                            <td><input type="number" value={mon_num} onChange={(event) => { setMon_num(event.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label>Tues</label></td>
                            <td><input type="date" value={tues} onChange={(event) => { setTues(event.target.value) }} /></td>
                            <td><input type="number" value={tues_num} onChange={(event) => { setTues_num(event.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label>Wed</label></td>
                            <td><input type="date" value={wed} onChange={(event) => { setWed(event.target.value) }} /></td>
                            <td><input type="number" value={wed_num} onChange={(event) => { setWed_num(event.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label>Thurs</label></td>
                            <td><input type="date" value={thurs} onChange={(event) => { setThurs(event.target.value) }} /></td>
                            <td><input type="number" value={thurs_num} onChange={(event) => { setThurs_num(event.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label>Fri</label></td>
                            <td><input type="date" value={fri} onChange={(event) => { setFri(event.target.value) }} /></td>
                            <td><input type="number" value={fri_num} onChange={(event) => { setFri_num(event.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label>Sat</label></td>
                            <td><input type="date" value={sat} onChange={(event) => { setSat(event.target.value) }} /></td>
                            <td><input type="number" value={sat_num} onChange={(event) => { setSat_num(event.target.value) }} /></td>
                        </tr>
                    </tbody>
                </table>
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    );

}

export default Tabel;