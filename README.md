# finance-ui-components
Financial Trading UI components library

# Order book

Configuration JSON

    {
      // following are required properties.
      asks: [],
      bids: [],

      // following are optional properties.
      headerText: 'Order Book',
      verticalLayout: false,
      askSize: { label : 'Ask Size', value : getters.getSize, sortable : false, onClick : () => {}},
      askPrice: {label : 'Ask Price', value : getters.getPrice, sortable : true, onClick : () => {}},
      bidSize: {label : 'Bid Size', value : getters.getSize, sortable : false, onClick : () => {}},
      bidPrice: {label : 'Bid Price', value : getters.getPrice, sortable : true, onClick : () => {}},
      askExtraColumns: [],
      bidExtraColumns: []
    }

Column Configuration

    {
      label: 'Column Header',
      value: 'getter function for getting value from row object',
      sortable: 'true/false',
      onClick: 'on click handler'
    }