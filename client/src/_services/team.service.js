import {fetch} from 'whatwg-fetch';

const url = `${process.env.PUBLIC_URL}/backend/team/`;


export default class teamService {
  static async team(year, number) {
    return fetch(`${url}team.php?&number=${number}${year !== null ? '&year='+year : ''}`)
      .then(data => data.json());
  }

  static async allYears() {
    return fetch(`${url}all_years.php`)
      .then(data => data.json());
  }

  static async getGroups(year){
    return fetch(`${url}group_list.php?&year=${year}`).then(data => data.json());
  }

  static async getGroupMembers(year, group){
    return fetch(`${url}get_members.php?&year=${year}&group=${group}`).then(data => data.json());
  }

  static async getDescription(year, group){
    return fetch(`${url}get_description.php?&year=${year}&group=${group}`,{Domain: "localhost"}).then(data => data.json());
  }
}