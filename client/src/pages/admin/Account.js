import React, { useState } from 'react';

import { Content, BackButton, Input, InputField, InputLabel, ButtonBorder} from '../components/admin.style.js';
import reroute from './_helpers/reroute.js';
import authenticationService from '../../../../services/authentication.service'

export default function Account({ history, location }) {

  const [ values, setValues ] = useState({username: '', password: '', passwordRepeat: ''});

  const updateField = (data) => {
    setValues({...values, ...data});
  }

  return (
    <Content>
      <BackButton onClick={() => reroute.toParent(history, location)} >Back</BackButton>
      <div>
        <Input>
          <InputLabel>Username</InputLabel>
          <InputField onChange={e => updateField({ username: e.target.value })} type="text" />
        </Input><br/>
        <ButtonBorder onClick={() => authenticationService.updateUsername(values.username)} >Update username</ButtonBorder>
        <br/>
        <Input>
          <InputLabel>Password</InputLabel>
          <InputField onChange={e => updateField({ password: e.target.value })} type="password" />
        </Input>
        <Input>
          <InputLabel>Repeat password</InputLabel>
          <InputField onChange={e => updateField({ passwordRepeat: e.target.value })} type="password" />
        </Input>
        <ButtonBorder onClick={() => authenticationService.updatePassword(values.password, values.passwordRepeat)} >Update password</ButtonBorder>
      </div>
    </Content>
  )
}