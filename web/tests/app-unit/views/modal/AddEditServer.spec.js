define(function (require_browser) {
    var $ = require_browser('jquery'),
        AddEditServerModal = require_browser('views/modal/AddEditServer'),
        Server = require_browser('models/Server'),
        ServerConnection = require_browser('models/ServerConnection');


    describe('AddEditServer (modal) - ItemView', function() {

        describe('onRender', function() {
            var modalSpy, addEditServerModal;
            var server, serverConnection;

            beforeEach(function() {
                var App = sinon.spy();
                App.vent = {trigger: sinon.spy(), bind: sinon.spy()};
                server = new Server();
                serverConnection = new ServerConnection({}, {server: server});
                addEditServerModal = new AddEditServerModal({App: App, model: server});
                addEditServerModal.render();
            });

            afterEach(function() {
                addEditServerModal.close();
            });

            it('defaults auth_key checkbox to checked', function() {
                expect(addEditServerModal.ui.auth_key_checkbox[0].checked).to.be.true;
            });

            it('defaults ssh_keypath to osx default key path', function() {
                expect(addEditServerModal.ui.ssh_keypath_text.val()).to.equal('~/.ssh/id_rsa');
            });

            it('disables/enables ssh_keypath text field and change button when auth_key is checked/unchecked', function() {
                expect(addEditServerModal.ui.ssh_keypath_text.attr('disabled')).to.be.undefined;
                expect(addEditServerModal.ui.ssh_keypath_button.attr('disabled')).to.be.undefined;

                addEditServerModal.ui.auth_key_checkbox.prop('checked', false).change();
                expect(addEditServerModal.ui.ssh_keypath_text.attr('disabled')).to.equal('disabled');
                expect(addEditServerModal.ui.ssh_keypath_button.attr('disabled')).to.equal('disabled');

                addEditServerModal.ui.auth_key_checkbox.prop('checked', true).change();
                expect(addEditServerModal.ui.ssh_keypath_text.attr('disabled')).to.be.undefined;
                expect(addEditServerModal.ui.ssh_keypath_button.attr('disabled')).to.be.undefined;
            });

            it('removes/adds default ssh_keypath value when auth_key checkbox is unchecked/checked', function() {
                expect(server.get('keyPath')).to.equal('~/.ssh/id_rsa');
                expect(addEditServerModal.ui.ssh_keypath_text.val()).to.equal('~/.ssh/id_rsa');

                addEditServerModal.ui.auth_key_checkbox[0].checked = false;
                addEditServerModal.$('input[name=auth_key]').change();

                expect(server.get('keyPath')).to.be.a('null');
                expect(addEditServerModal.ui.ssh_keypath_text.val()).to.equal('');

                addEditServerModal.ui.auth_key_checkbox[0].checked = true;
                addEditServerModal.$('input[name=auth_key]').change();

                expect(server.get('keyPath')).to.equal('~/.ssh/id_rsa');
                expect(addEditServerModal.ui.ssh_keypath_text.val()).to.equal('~/.ssh/id_rsa');
            });

            it('hides/shows manual password notice when auth_key checkbox is unchecked/checked', function() {
                expect(addEditServerModal.ui.manual_password_notice.css('display')).to.equal('none');
                addEditServerModal.ui.auth_key_checkbox[0].checked = false;
                addEditServerModal.$('input[name=auth_key]').change();

                expect(addEditServerModal.ui.manual_password_notice.css('display')).to.equal('block');
                addEditServerModal.ui.auth_key_checkbox[0].checked = true;
                addEditServerModal.$('input[name=auth_key]').change();
                expect(addEditServerModal.ui.manual_password_notice.css('display')).to.equal('none');
            });
        });
    });
});