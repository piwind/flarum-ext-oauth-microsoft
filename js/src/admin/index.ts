import app from 'flarum/admin/app';
import { ConfigureWithOAuthPage } from '@fof-oauth';

app.initializers.add('piwind/oauth-microsoft', () => {
  app.extensionData.for('piwind-oauth-microsoft').registerPage(ConfigureWithOAuthPage);
});
