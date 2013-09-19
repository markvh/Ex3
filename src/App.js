Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{
        html:''
            },

// getDetailUrl( record, 'Defect' )




    launch: function() {
        Rally.data.ModelFactory.getModel({
                        type: 'Defect',
                        success: function(model) {
                            this.grid = this.add({
                                xtype: 'rallygrid',
                                model: model,
                                columnCfgs: [
                                    'Name',
                                    'Blocked',
                                    'Requirement'
                                    
                                ],
                                
                                listeners: {
                                    itemclick: function ( grid, record, item, index, e, eOpts )
                                    {
                                        console.log (item)
                                    }
                                },
                                
                                
                                storeConfig: {
                                    filters: [
                                        {
                                            property: 'Name',
                                            operator: 'Contains',
                                            value: 'a'
                                        }
                                            ]
                                            }
                            });
                        },
                        scope: this
        });
    }
});
