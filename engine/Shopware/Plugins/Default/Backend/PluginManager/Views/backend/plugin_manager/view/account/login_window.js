//{namespace name=backend/plugin_manager/translation}
Ext.define('Shopware.apps.PluginManager.view.account.LoginWindow', {
    extend: 'Ext.window.Window',
    modal: true,

    /**
     * Contains all snippets for the view component
     * @object
     */
    snippets: {
        title: '{s name=account/title}Shopware ID{/s}',
        descriptionMessage: '{s name=account/description_message}Here you can create you personal Shopware ID. The Shopware ID will give you access to your Shopware account in our forum, wiki and other community resources. It will also grant you access to our plugin store, where you can find many more plugins that will help you easily customize your shop to your needs.{/s}'
    },

    cls: 'plugin-manager-login-window',

    header: false,

    minWidth: 800,
    bodyPadding: 40,

    initComponent: function () {
        var me = this;

        me.items = [
            me.createHeadline(),
            me.createDescriptionText(),
            me.createLayouts()
        ];

        me.callParent(arguments);
    },

    createLayouts: function () {
        var me = this;

        return {
            border: false,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            anchor: '100%',
            items: [
                me.createLoginPanel(),
                me.createRegisterPanel()
            ]
        };

    },

    createHeadline: function () {
        var me = this;

        return Ext.create('Ext.container.Container', {
            border: false,
            layout: 'hbox',
            anchor: '100%',
            cls: 'headline-container',
            items: [
                Ext.create('Ext.Component', {
                    html: me.snippets.title,
                    width: 680,
                    cls: 'headline'
                }),
                Ext.create('PluginManager.container.Container', {
                    html: 'X',
                    cls: 'headline-close',
                    width: 40,
                    handler: function() {
                        Shopware.app.Application.fireEvent('destroy-login');
                    }
                })
            ]
        });
    },

    createDescriptionText: function() {
        var me = this;
        return {
            html: me.snippets.descriptionMessage,
            margin: '0 0 20 0',
            cls: 'description-text',
            width: 720,
            border: false
        }
    },

    createLoginPanel: function () {
        var me = this;

        return Ext.create('Shopware.apps.PluginManager.view.account.Login', {
            callback: me.callback
        });
    },

    createRegisterPanel: function () {
        var me = this;

        return Ext.create('Shopware.apps.PluginManager.view.account.Register', {
            callback: me.callback
        });
    }

});