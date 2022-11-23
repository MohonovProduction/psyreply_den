<template>
  <article class="wrapper">
    <h1 class="heading wrapper__heading">See, or check console</h1>
    <article v-for="log in data" class="console">
      <h2 class="heading console__heading">id: {{log.id}}</h2>
      <h3 class="heading">Name: {{log.name}}</h3>
      <p class="text">Message: {{log.message}}</p>
      <p class="text">Time: {{new Date(log.timestamp)}}</p>
      <div>
        <pre v-for="stroke in log.stack" class="console__log">{{stroke}}</pre>
      </div>
    </article>
  </article>
</template>

<script>
export default {
  name: "Console",
  props: {
    data: {
      type: Array,
      default: [
        {
          "id": 1,
          "name": "Error",
          "message": "test",
          "stack": [
            "Error: test",
            " UserController.get (/home/dudosyka/Documents/psyreply2.0_backend/src/modules/user/controllers/user.controller.ts:7:11)",
            " /home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/router/router-execution-context.js:38:29",
            " InterceptorsConsumer.intercept (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/interceptors/interceptors-consumer.js:11:20)",
            " /home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/router/router-execution-context.js:46:60",
            " /home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/router/router-proxy.js:9:23",
            " Layer.handle [as handle_request] (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/layer.js:95:5)",
            " next (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/route.js:144:13)",
            " Route",
            "ch (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/route.js:114:3)",
            " Layer.handle [as handle_request] (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/layer.js:95:5)",
            " /home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/index.js:2"
          ],
          "timestamp": "2022-11-22T21:22:52.000Z"
        },
        {
          "id": 3,
          "name": "Error",
          "message": "test",
          "stack": [
            "Error: test",
            " UserController.get (/home/dudosyka/Documents/psyreply2.0_backend/src/modules/user/controllers/user.controller.ts:7:11)",
            " /home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/router/router-execution-context.js:38:29",
            " InterceptorsConsumer.intercept (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/interceptors/interceptors-consumer.js:11:20)",
            " /home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/router/router-execution-context.js:46:60",
            " /home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/router/router-proxy.js:9:23",
            " Layer.handle [as handle_request] (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/layer.js:95:5)",
            " next (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/route.js:144:13)",
            " Route",
            "ch (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/route.js:114:3)",
            " Layer.handle [as handle_request] (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/layer.js:95:5)",
            " /home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/index.js:2"
          ],
          "timestamp": "2022-11-22T21:24:01.000Z"
        },
        {
          "id": 4,
          "name": "BadRequestException",
          "message": "Expected property name or '}' in JSON at position 2",
          "stack": [
            "BadRequestException: Expected property name or '}' in ",
            " position 2",
            " RoutesResolver.mapExternalException (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/router/routes-resolver.js:100:24)",
            " callback (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/router/routes-resolver.js:86:24)",
            " /home/dudosyka/Documents/psyreply2.0_backend/node_modules/@nestjs/core/router/router-proxy.js:20:23",
            " Layer.handle_error (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/layer.js:71:5)",
            " trim_prefix (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/index.js:326:13)",
            " /home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/index.js:286:9",
            " Function.process_params (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/index.js:346:12)",
            " next (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/index.js:280:10)",
            " Layer.handle_error (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/layer.js:67:12)",
            " trim_prefix (/home/dudosyka/Documents/psyreply2.0_backend/node_modules/express/lib/router/index.js:32"
          ],
          "timestamp": "2022-11-22T21:24:10.000Z"
        }
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 1rem;
  display: grid;
  grid-gap: .5rem;
}
.wrapper__heading {
  margin-bottom: 1rem;
}
.console {
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  background: hsl(0, 0%, 0%);
}
</style>
