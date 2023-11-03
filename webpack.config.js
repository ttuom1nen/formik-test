export const module = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader' },
    },
    {
      test: /\.css?$/,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
    },
    {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
      ],
    },
  ],
}
