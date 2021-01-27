import React from 'react';
import Widget from '../Widget';

const LoadingWidget: React.FC = () => {
  return (

      <Widget>
        <Widget.Header>
          Carregando...
        </Widget.Header>

        <Widget.Content>
          [Desafio do Loading]
        </Widget.Content>
      </Widget>
    );

}

export default LoadingWidget;
